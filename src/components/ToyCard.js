import React,{useState} from "react";

function ToyCard({data,onDelete}) {
  const{id,name,image,likes}= data
  const [meGusta,setMeGusta] = useState(likes)

          
  
function handleDelete(e){
  e.preventDefault()
  onDelete(data)
}

function handleClick(e){
  e.preventDefault()
   setMeGusta(()=>(meGusta +1) )
 

  fetch(`http://localhost:3001/toys/${data.id}`,{

  method:"PATCH",
  headers: {
    "Content-type": "application/json",
  },
  body:JSON.stringify(
    {
      
      "likes": meGusta + 1
    }
   
    

  )})
  .then(r => r.json())
  .then((updatedItem)=> (console.log(updatedItem)));




}




  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{meGusta} Likes </p>
      <button className="like-btn" onClick={handleClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
