
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName]=useState("");

  return (
    <div>

    
     {/* console.log("hey") */}
        <h2> Enter Your Name :</h2>
      <input type="text"  onChange={(e)=>{setName(event.target.value)}}/>
      <p>Hello {name}!</p> 
    </div>
  )
}

export default App
