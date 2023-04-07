import React from "react";

function ToyForm({setData,data}) {


    function handleForm(e){
      e.preventDefault()
      console.log(e.target.name.value)
      const name = e.target.name.value
      const image = e.target.image.value
      const likes = 0
    
      
      
    fetch("http://localhost:3001/toys",{
      method: "POST",
      headers: 
      { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          "name": name,
          "image": image,
          "likes": parseInt(likes)

         
        }
      )


      
    })
    .then(r=> r.json())
    .then(dat=> setData([...data,dat]))
    

  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleForm}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          // onClick = {handleClick}
        />
      </form>
    </div>
  );
}

export default ToyForm;
