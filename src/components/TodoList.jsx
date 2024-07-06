function TodoList({todoName, itemDate,onDeleteClick}){

return (
  <div className="container">
  <div className="row newRow">
    <div className="col-6">
     {todoName}
    </div>
    <div className="col-4">
     {itemDate}
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger newButton" onClick={()=>onDeleteClick(todoName)}>Delete</button>
    </div>
  </div>
</div>
);
}

export default TodoList;