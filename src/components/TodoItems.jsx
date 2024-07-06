import TodoList from "./TodoList";
import styles from "./TodoItems.module.css";

const TodoItems = ({todoItems,onDeleteClick})=>{
return(
  <div className={styles.listContainer}>
    {todoItems.map((item) => (<TodoList 
    key={item.id} 
    itemDate={item.dueDate}
     todoName={item.name} 
     onDeleteClick={onDeleteClick}
     ></TodoList>))}
      
      </div>
);
}

export default TodoItems;