import React, { useEffect, useState } from "react";
import './App.css';


function App() {
  const [name,setName] = useState("osman");
  const [age,setAge] = useState(17);
  const [frineds,setFrineds]  =useState(["ahmet","mehmet"]);
  const [address,setAddress]= useState({title: "ankara",zip:1111});

  const deneme = ()=>{
   setAddress({title:"konya",zip:4242})
  }
  return (
    <>
    <h1>Hello {name}</h1>
    <h1>{age}</h1>
    <button onClick={()=> setName("yavşak hüdo")}>
        Change name
    </button>
    <button onClick={()=> setAge(18)}>
        Change Age
    </button>
       <br/>
       <br/>
       <hr></hr>

    {
      frineds.map((frined,index)=>(
        <div key={index}>{frined}</div>
      ))
    }
      <button onClick={()=> setFrineds([...frineds,"osman"])}>
        add array
    </button>
    <br/>
       <br/>
       <hr></hr>
      <h1>{address.title} - {address.zip}</h1>
      {/* <button onClick={()=> setAddress({title:"konya",zip:4242})}>
        add array
    </button> */}
         <button onClick={deneme}>
        add array
    </button>
    </>
  );
}

export default App;
