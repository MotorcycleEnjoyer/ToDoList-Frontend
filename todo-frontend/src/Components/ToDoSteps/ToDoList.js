import ToDoStep from './ToDoStep'
import React from "react"

export default function ToDoList({propsObject}) {
  let [step, setStep] = React.useState("")
  function writeStep(event){
    setStep(event.target.value)
  }

  function submitWithEnter(event){
    if(event.keyCode === 13){
      if(step === "")
        return
      propsObject.toDoListMethods.addStep(propsObject.listIndex, event.target.value)
      setStep("")
    }
  }

  function addStep(event){
    if(step === "")
      return
    propsObject.toDoListMethods.addStep(propsObject.listIndex, step)
    setStep("")
  }

  const [title, setTitle] = React.useState("")

  function titleChange(event){
    setTitle(event.target.value)
  }

  function submitTitle(){
    if(title==="")
      return

    propsObject.toDoListMethods.changeTitle(propsObject.listIndex, title)
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
    propsObject.toDoListMethods.changeTitle(propsObject.listIndex, "RENAME ME")
  }

  let stepListAsHTML = propsObject.toDoList.list.map((element, index) => 
    <ToDoStep 
          key={index} 
          step={element}
          listIndex = {propsObject.listIndex}
          stepIndex = {index}
          delete={propsObject.toDoStepMethods.removeStep}
          edit={propsObject.toDoStepMethods.editStep}
  />)

  return (
      <div className="Flex-Container">
        <h1>
            { propsObject.toDoList.name === "RENAME ME" ? 
              <div id="titleContainerEditing">
                <input id="titleChange" onChange={titleChange} autoFocus value={title} onKeyDown={waitForEnterKey} placeholder="EnterTitle"></input>
                <button onClick={submitTitle}>Submit New Title</button>
              </div>
              :
              <div id="titleContainerNoEdit">

                <div id="titleContainerNoEdit--buttons">
                  <button className="returnToMenu" onClick={propsObject.toDoListMethods.returnToMenu}>MENU</button>
                  <button onClick={resetTitle}>EDIT TITLE</button>
                </div>
                
                <p id="titleContainerNoEdit--title">{propsObject.toDoList.name} </p> 
              </div>
              
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
