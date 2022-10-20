import logo from './logo.svg';
import './App.css';
import ToDoList from './Components/ToDoSteps/ToDoList'
import React from 'react';
import AllToDoLists from './Components/AllToDoLists';

function App() {
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
      setDefaultList(response.data || [])
      }) 

      console.log("FETCH INITIAL LIST!!!")
  }, []) */


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
