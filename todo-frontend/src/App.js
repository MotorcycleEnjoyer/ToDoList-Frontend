import logo from './logo.svg';
import './App.css';
import ToDoList from './Components/ToDoSteps/ToDoList'
import React from 'react';
import AllToDoLists from './Components/AllToDoLists';

function App() {
  // HOMEPAGE, CREATING A NEW LIST, WITHIN A LIST
  const [currentView, setCurrentView] = React.useState("homePage")

  const [defaultList, setDefaultList] = React.useState([
    {name: "First", list: ["one","two"]},
    {name: "Tying Shoes", list: ["Put shoes on","Cross the laces and pull", "make loops", "cross loops and pull"]},
    {name: "Third", list: ["three","four"]},
    {name: "Fourth", list: ["three","four"]},
    {name: "Fifth", list: ["three","four"]}
  ])

  // NETWORKING and SAVING

  /*   React.useEffect(()=>{
     axios.get("http://localhost:5000/", {crossDomain: true}).then(response => {
      setStepList(response.data || [])
      }) 

      console.log("FETCH INITIAL LIST!!!")
  }, []) */

  /*
  //const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if(stepList.length === 0)
      return


      updateServerList(stepList)
      /*
      if(count >= 1){
        console.log("WE ARE CHECKED")
        
      }
      if(count <= 0){
        setCount(prev => prev + 1)
      }
        

      console.log("FETCH AFTER UPDATE!!!")

        
  },[stepList])
  */

  /* 
  function updateServerList(data){
    
    axios.post('http://localhost:5000/', data)
        .then(res => {
          console.log(`statusCode: ${res.status}`)
    })

    console.log("UPDATE SERVER LIST FUNCTION")
  } */
 
  /* 
  function deleteFromList(arrayIndex){
    if(stepList.length === 1){
      updateServerList([])
    }
    setStepList(prevList => {
        return prevList.filter((element, index) => {
            return index !== arrayIndex
        })
    })
  } */
  
  return (
    <div className="Flex-Container">
      <AllToDoLists importList={defaultList} />
    </div>
  );
}

export default App;
