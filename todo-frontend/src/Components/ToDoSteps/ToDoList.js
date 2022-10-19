import ToDoStep from './ToDoStep'
import React from "react"

export default function ToDoList({propsObject}) {

  let [step, setStep] = React.useState("")
  let [listIndex, setListIndex] = React.useState(propsObject.listIndex)
  let listName = ""
  function writeStep(event){
    setStep(event.target.value)
  }

  function submitWithEnter(event){
    if(event.keyCode === 13){
      if(step === "")
        return
      propsObject.addStep(listIndex, event.target.value)
      setStep("")
    }
  }

  function addStep(event){
    if(step === "")
      return
    propsObject.addStep(listIndex, step)
    setStep("")
  }

  const [title, setTitle] = React.useState("")

  function titleChange(event){
    setTitle(event.target.value)
  }

  function submitTitle(){
    if(title==="")
      return

    propsObject.changeTitle(listIndex, title)
    let input = document.getElementById("listInput")
    input.focus()
  }

  function waitForEnterKey(event){
    if(event.keyCode===13){
      submitTitle()
    }
  }
  
  function resetTitle(){
    setTitle("")
    propsObject.changeTitle(listIndex, "RENAME ME")
  }

  let stepListAsHTML = propsObject.steps.list.map((element, index) => 
    <ToDoStep 
          key={index} 
          step={element}
          listIndex = {listIndex}
          index = {index}
          delete={propsObject.removeStep}
          edit={propsObject.editStep}
  />)

  return (
      <div className="Flex-Container">
        <h1>
            { propsObject.steps.name === "RENAME ME" ? 
              <div id="titleContainer">
                <input id="titleChange" onChange={titleChange} autoFocus value={title} onKeyDown={waitForEnterKey} placeholder="EnterTitle"></input>
                <button onClick={submitTitle}>Submit New Title</button>
              </div>
              :
              <div id="titleContainer"><button onClick={propsObject.returnToMasterList}>MENU</button> <div>{propsObject.steps.name} </div> <button onClick={resetTitle}>EDIT TITLE</button></div>
              
            }
        </h1>
        
        <input 
          id="listInput"
          className="listInput" 
          type="text"
          onChange={writeStep}
          value={step}
          onKeyDown={submitWithEnter}
          placeholder="NEW STEP"
        />

        <button className="listInput" onClick={addStep}>SUBMIT OR PRESS ENTER</button>
        
        <div className="ToDoList">{stepListAsHTML}</div>
      </div>
  );
}
