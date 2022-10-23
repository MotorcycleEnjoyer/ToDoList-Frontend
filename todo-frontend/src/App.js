import './App.css';
import React from 'react';
import AllToDoLists from './Components/AllToDoLists';

function App() {
  const [defaultList, setDefaultList] = React.useState([
    {name: "Air Frier Bacon", list: ["Set frier to Bake, 425F 13min", "Put aluminum foil sheet onto frier tray, and add bacon", "Add into oven.", "Enjoy"]},
    {name: "Tying Shoes", list: ["Put shoes on","Cross the laces and pull", "make loops", "cross loops and pull"]},
    {name: "Third", list: ["One","Two","Three","Four"]},
  ])

  return (
    <div className="Flex-Container">
      <AllToDoLists importList={defaultList} />
    </div>
  );
}

export default App;
