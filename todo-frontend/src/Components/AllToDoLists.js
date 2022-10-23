import React from "react";
import ToDoList from "./ToDoSteps/ToDoList";

export default function MasterList({importList}){
    const [masterList, setMasterList] = React.useState(importList)
    const [view, setView] = React.useState("masterList")
    const [props, setProps] = React.useState({})

    function configureProps(listIndex){
        if(masterList.length === listIndex)
            console.log("SHIT DOESN'T EXIST BRO!!!")
        setProps({
            toDoList: masterList[listIndex], 
            listIndex: parseInt(listIndex), 
            toDoListMethods: {
                changeTitle: masterList_todoList_editName,
                addStep: masterList_todoList_addStep,
                returnToMenu: changeView_from_todo_to_masterList,
            },
            toDoStepMethods: {
                editStep: masterList_todoList_steps_editStep,
                removeStep: masterList_todoList_steps_removeStep
            }
        })
    }



    function changeView(arg){
        setView(arg)
    }

    function changeView_from_masterList_to_selected_todo(event){
        let clickTarget = event.target
        if(clickTarget.className ==="masterList--container--elements" || clickTarget.className === "masterList--container--elements--listName"){
            let listIndex = clickTarget.id.slice(5)
            configureProps(listIndex)
            changeView("toDoList")
        }
    }

    function changeView_from_todo_to_masterList(){
        changeView("masterList")
    }



    function  masterList_addToDoList(){
        let newListObject = {
            name: "RENAME ME",
            list: []
        }
            setMasterList(prev => [newListObject, ...prev])
    }

    function masterList_removeToDoList(event){
        let index = parseInt(event.target.className.substring(7))
        let copyArray = [...masterList]
        copyArray.splice(index, 1)
        setMasterList(copyArray)
    }



    function masterList_todoList_editName(listIndex, newString){
        let copyArray = [...masterList]
        copyArray[listIndex].name = newString
        setMasterList(copyArray)
    }

    function masterList_todoList_addStep(listIndex, newString){
        let copyArray = [...masterList]
        copyArray[listIndex].list.push(newString)
        setMasterList(copyArray)
    }



    function masterList_todoList_steps_editStep(listIndex, stepIndex, newString){
        let copyArray = [...masterList]
        copyArray[listIndex].list[stepIndex] = newString
        setMasterList(copyArray)
    }

    function masterList_todoList_steps_removeStep(listIndex, stepIndex){
        let copyArray = [...masterList]
        let stepListToEdit = copyArray[listIndex].list
        stepListToEdit.splice(stepIndex, 1)
        copyArray[listIndex].list = stepListToEdit
        console.log(copyArray[listIndex].list)
        setMasterList(copyArray)
    }



    const allListsAsHTML = masterList.map((x, index) => 
        <div key={index} className="masterList--container--elements" id={"list-" + index} onClick={changeView_from_masterList_to_selected_todo}>
            <div className="masterList--container--elements--listName" id={"name-" + index}>{x.name}</div>
            <button type="button" className={"delete-"+index} onClick={masterList_removeToDoList}>DELETE</button> 
        </div>)

    return(
    <>
        {   
            view==="masterList" && <div id="masterList">
            <h1>{masterList.length > 0 ? "All ToDo Lists" : "No ToDo Lists"}</h1>
            <button id="newToDoListButton" onClick={masterList_addToDoList}>CREATE NEW LIST</button> <br></br>
            <div id="masterList--container">
                {allListsAsHTML}
            </div>
            </div>
        }

        {
            view==="toDoList" && <div>
                <ToDoList propsObject={props}/>
            </div>

        }       
    </>
    )
}