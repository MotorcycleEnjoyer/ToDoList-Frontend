import React from "react"

export default function ToDoStep(props){
    const [modify, setModify] = React.useState(false)
    const [newStep, setNewStep] = React.useState(props.step)
    const [textIsDifferent, setTextIsDifferent] = React.useState(false)

    function toggleEdit(){
        setModify(prev => !prev)
    }

    React.useEffect(()=>{
        if(modify){
            setNewStep(props.step)
            let input = document.getElementById("step--input")
            let end = input.value.length
            input.focus()
            input.setSelectionRange(0, end)
        }
        if(!modify){
            document.getElementById("listInput").focus();
        }
    }, [modify])

        

    React.useEffect(()=>{
        if(newStep !== props.step){
            setTextIsDifferent(true)
        }
        else{
            setTextIsDifferent(false)
        }
    },[newStep, props.step])

    function changeStep(event){
        setNewStep(event.target.value)
    }

    function submit(){
        toggleEdit()
        if(!textIsDifferent){
            return
        }
        props.edit(props.listIndex, props.index, newStep)
        
    }

    function submitWithEnter(event){
        if(event.keyCode === 13){
          submit()
        }
      }

    function deleteCurrent(){
        props.delete(props.listIndex, props.index)
        document.getElementById("listInput").focus();
    }

    const style={
        backgroundColor: textIsDifferent ? "green" : "orange",
        color: "white",
    }

    return(
        <div className="step" key={props.index}>
          {modify === false && <button className='step--delete' onClick={deleteCurrent}>DELETE</button>} 
          {modify === false && <button className='step--edit' onClick={toggleEdit}>EDIT</button>}
          <div className="step--index">
              {props.index < 9 && "0" }
              {props.index+1}
            </div> 
          
          {
          modify === true ? 
            <>
                <textarea id="step--input" className="step--input" onChange={changeStep} onKeyDown={submitWithEnter} value={newStep}></textarea> 
                <button onClick={submit} style={style} className="step--edit">{textIsDifferent ? "Submit" : "Cancel"}</button> 
            </>
          : 
            <p className="step--content" onClick={toggleEdit}>{props.step}</p>
          }

        </div>
    )
}