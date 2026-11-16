import { useContext } from 'react';
import TodoContext from './TodoContext';
import sytle from './todoitem.module.css'

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li className={sytle.todoItem}>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
        onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
      >
        
        <form action="">
          <input type="checkbox" name="" id=""  className= {sytle.check}/>
              {todo.text} 
        </form>
    



      </span>
      <button onClick={() => dispatch({ type: 'delete', payload: todo.id })} className={sytle.deleted} >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;