
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName]=useState("");

  return (
    <div>
       
        <h1> Enter Your Name </h1>
      <input type="text"  onChange={setName(event.target.value)}/>
      <p> {name}</p>
    </div>
  )
}

export default App
