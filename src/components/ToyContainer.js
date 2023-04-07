import React,{useEffect, useState} from "react";
import ToyCard from "./ToyCard";
import { v4 as uuidv4 } from 'uuid'

function ToyContainer({setData,data}) {
 
  useEffect(()=> fetch("http://localhost:3001/toys")
  .then(r=> r.json())
  .then(data=> setData(data)),[]
  )
  

  
  function handleDelete(deletedItem){
   

fetch(`http://localhost:3001/toys/${deletedItem.id}`, {
         method: "DELETE", })
.then((r) => r.json())
.then((dat) => {
  const UpdatedItems = data.filter((item)=>{ return item.id !== deletedItem.id
    })
    setData(UpdatedItems)
           //  setItems(data)
     });
}




  return (
    <div id="toy-collection">{data.map((obj)=><ToyCard onDelete={handleDelete} data={obj} key={uuidv4()}/>)}</div>
  );
}

export default ToyContainer;
