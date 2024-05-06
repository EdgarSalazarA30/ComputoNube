import logo from './logo.svg';
//Comando que importa hoock
import {useState,useEffect}from "react"
import './App.css';

function App() {
  const[data, setData]=useState(null)

  useEffect( ()=> {
    fetch("http://129.153.234.248:3000/users")
    .then((response)=>response.json())
    .then((data)=>setData(data));
  },[]);


  return (
    <div className="App">
     <h2>INFORMACION DE USERS</h2>

     <ul> 
      {data?.map((user)=>(
        <li key={user.id}>{user.name}</li>
      ))}

     </ul>
    </div>
  );
}

export default App;
