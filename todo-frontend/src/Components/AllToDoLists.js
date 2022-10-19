// Masterlist object, containing ALL todolists

import React from "react";
import ToDoList from "./ToDoSteps/ToDoList";

export default function MasterList({importList}){
    const [masterList, setMasterList] = React.useState(importList)
    const [view, setView] = React.useState("masterList")
    const [props, setProps] = React.useState({})

    React.useEffect(()=>{
        console.log("HOORAH")
    }, [masterList])

    // NAVIGATION FUNCTIONS
    function changeView(arg){
        setView(arg)
    }

    function configureProps(listIndex){
        if(masterList.length === listIndex)
            console.log("SHIT DOESN'T EXIST BRO!!!")
        setProps({
            steps: masterList[listIndex], 
            listIndex: parseInt(listIndex), 
            returnToMasterList: returnToMasterList, 
            addStep: addStep,
            editStep: editStep,
            removeStep: removeStep,
            changeTitle: changeStepListName
        })
    }

    function selectList(event){
        if(event.target.className==="masterList--container--elements"){
            let listIndex = event.target.id
            configureProps(listIndex)
            changeView("toDoList")
        }
    }

    function returnToMasterList(){
        changeView("masterList")
    }


    function selectNewListUponCreation(){

        let listIndex = masterList.length
        configureProps(listIndex)
        changeView("toDoList")
    }

    // MASTER LIST HIGHER FUNCTIONS
    function addToDoList(){
        let newListObject = {
            name: null,
            list: []
        }
            setMasterList(prev => [...prev, newListObject])
            
            //selectNewListUponCreation()
    }

    function removeToDoList(event){
        let index = parseInt(event.target.className.substring(7))
        let copyArray = [...masterList]
        copyArray.splice(index, 1)
        setMasterList(copyArray)
    }

    // MASTER LIST, ToDo STEPS
    function changeStepListName(listIndex, newString){
        let copyArray = [...masterList]
        copyArray[listIndex].name = newString
        setMasterList(copyArray)
    }

    function addStep(listIndex, newString){
        let copyArray = [...masterList]
        copyArray[listIndex].list.push(newString)
        setMasterList(copyArray)
    }

    function editStep(listIndex, stepIndex, newString){
        let copyArray = [...masterList]
        copyArray[listIndex].list[stepIndex] = newString
        setMasterList(copyArray)
    }

    function removeStep(listIndex, stepIndex){
        let copyArray = [...masterList]
        let stepListToEdit = copyArray[listIndex].list
        stepListToEdit.splice(stepIndex, 1)
        copyArray[listIndex].list = stepListToEdit
        console.log(copyArray[listIndex].list)
        setMasterList(copyArray)
    }


    const allListsAsHTML = masterList.map((x, index) => 
    <div className="masterList--container--elements" id={index} onClick={selectList}>{x.name}
    <button type="button" className={"delete-"+index} onClick={removeToDoList}>DELETE</button> 
    </div>)

    return(
    <>

    {   view==="masterList" && <div id="masterList">
        <h1>{masterList.length > 0 ? "All ToDo Lists" : "No ToDo Lists"}</h1>
        <button onClick={addToDoList}>CREATE NEW LIST</button> <br></br>
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