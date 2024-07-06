import { useState } from "react";

function AddTodo({onNewItem}){

  const[todoName, setTodoName] = useState();
  const[dueDate, setDueDate] = useState();

  const handleNameChange =(event)=>{
    setTodoName(event.target.value)
  }

  const handleDateChange =(event)=>{
   setDueDate(event.target.value)
  }

  const handleAddButtonClicked =()=>{
     onNewItem(todoName,dueDate);
     setTodoName("");
     setDueDate("");
  }

  return(  

  <div className="container text-center">
    <div className="row kg-row">
  <div className="col-6">
      <input type="text" placeholder='Enter To do Here' value={todoName} onChange={handleNameChange} />
    </div>
    <div className="col-4">
      <input type="date" value={dueDate} onChange={handleDateChange} />
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success newButton" onClick={handleAddButtonClicked}>ADD</button>
    </div>
  </div>
  </div>
  );
}

export default AddTodo;