import { SetStateAction, useState } from 'react'
import { v4 as uuidv4} from 'uuid';
import styles from '../styles/Todo.module.css'
// import '../styles/globals.css'
import cx from 'classnames'
// import dynamic from 'next/dynamic'

// type Task = {
//   id: string,
//   title: string,
//   completed: boolean,
//   createdAt: Date
// }


// function todo() {

//   const list = document.querySelector<HTMLUListElement>('#list')
//   const form = document.querySelector<HTMLFormElement>('#new_task_form')
//   const input = document.querySelector<HTMLInputElement>('#new_task_title')
  

//   form?.addEventListener('submit', e => {
//     e.preventDefault()

//     if (input?.value == '' || input?.value == null ) return

//     const newTask= {
//       id: uuidv4(),
//       title: input?.value,
//       completed: false,
//       createdAt: new Date(),
//     }

//     addListItem(newTask)

//   })

//   function addListItem(task: Task){
//     const item = document.createElement('li')
//     const label = document.createElement('label')
//     const checkbox = document.createElement('input')
//     checkbox.type = 'checkbox'
//     label.append(checkbox, task.title)
//     item.append(label)
//     list?.append(item)
//   }

    

//     return ( 
//     <div>
//          <h1>Todo List</h1>
//          <ul id='list'></ul>
//         <form id='new_task_form'>
//             <input type="text" id='new_task_title'/><button type='submit'>Add</button>
//         </form> 

//     </div>
//     )
//   }
  
// export default todo;

// function addListItem(newTask: Task) {
//   throw new Error('Function not implemented.')
// }
// function newTask(newTask: any) {
//   throw new Error('Function not implemented.')
// Buy Milk","Buy car","Wash car
// }

const todo = () =>{

  const [todoItem, setTodoItem] = useState('');
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      message: "",
      done: false,
    }
  ]);

  const handleEnter =(e: { key: string; }) =>{
    if(e.key === 'Enter'){
      handleAdd();
    }
  }

  const handleAdd = () => {
    if(todoItem){

      setItems([
        {
          id: uuidv4(),
          message: todoItem,
          done: false
        },
         ...items])
      setTodoItem("")
    }
  }

  const handleToggle = (id : string) => {
    const _items = items.map((item) => {
      if(item.id === id){
        return {
          ...item,
          done: !item.done
        };
      }
      return item;
    });
    setItems(_items);
  }

  return(
    <div className={styles.todo_screen}>
      <div className={styles.todo_app}>
        <h1>Todo App</h1>

        <div>
          <input type='text' value={todoItem} onChange={(e)=> setTodoItem(e.target.value)} className={styles.todo_input} onKeyDown={handleEnter}/>
          <button type='button' onClick={handleAdd} className={styles.todo_input_button}>Add</button>
        </div>

        <ul className={styles.todo_ul}>
          {
            items.filter((item) => !item.done).map(({id, message, done}) => (
              <li key ={id} onClick={() => handleToggle(id)} className={cx('item',{done: done})}>{message}</li>
            ))
          }

{
            items.filter((item) => item.done).map(({id, message, done}) => (
              <li key ={id} onClick={() => handleToggle(id)} className={cx('item',{done: done})}>{message}</li>
            ))
          }
          
          
        </ul>

      </div>

    </div>

  );
};

export default todo;