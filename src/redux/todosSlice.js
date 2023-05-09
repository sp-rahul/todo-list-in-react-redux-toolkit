
import {createSlice} from "@reduxjs/toolkit";


const todo = localStorage.getItem('todo') !== null ? JSON.parse(localStorage.getItem('todo')): []

export const toDoSlider = createSlice({
    name: 'toDo',

    initialState: {
    todoList: todo
},

reducers: {
    addToDo: (state, action) => {
      let newTodoList = {
         id: Math.random(),


        title: action.payload.title,
        time: new Date().toLocaleString(),
		completed: false,
      }
      state.todoList.push(newTodoList);

      localStorage.setItem('todo', JSON.stringify(state.todoList));
      document.getElementById('addTaskForm').reset();
    },

    deleteToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => 
          item.id !==action.payload.id);

     localStorage.setItem('todo', JSON.stringify(state.todoList));
          
    },

    editToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.map((item) => {
          console.log( action.payload)
          return item.id === action.payload.id ? action.payload : item
      });

      localStorage.setItem('todo', JSON.stringify(state.todoList));
      
    },

    toggleComplete: (state, action) => {
        let { todoList } = state;
        state.todoList = todoList.map((item) => {
            //console.log( action.payload);
           return  item.id == action.payload.id ? action.payload : item

        }
        );

        localStorage.setItem('todo', JSON.stringify(state.todoList));
    },


   },

   
 })




export const {addToDo, deleteToDo, editToDo, toggleComplete} = toDoSlider.actions;
export default toDoSlider.reducer;
