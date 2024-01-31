import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
    { id: 3, text: "autres !", done: false },
  ],

  reducers: {
    addTask: (state, action) => {
      //  { type : "todo/addTask", payload: "Aller faire les courses" }
      const newTask = {
        id: Date.now(),
        done: false,
        text: action.payload,
      };
      state.push(newTask);
    },
    toggleTask: (state, action) => {
      //  { type : "todo/toggleTask", payload: 20 }
      const task = state.find((t) => t.id === action.payload);
      task.done = !task.done;
    },
    updateTask:(state, action)=> {
      //  { type : "todo/updateTask", payload: text } 
      state.map((t) => { 
        if (t.id === action.payload.id) return action.payload;
        else return t;
      });
    },
    deleteTask: (state, action) => {
      //  { type : "todo/deleteTask", payload: 20 }
      return (state = state.filter((t) => t.id !== action.payload));
    },
  },
});

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})


export const { addTask, deleteTask, toggleTask, updateTask } = todoSlice.actions;

// Action createToggle
/*export const createToggle = (id) => {
	return {
    type: "todo/toggleTask",
    payload: id
  };
}



// Action deleteTask
export const deleteTask = (id) => {
	return {
    type: "todo/deleteTask",
    payload: id,
  };
}


// Action createTask
export const createTask = (text) => {
	return {
    type: "todo/deleteTask",
    payload: text
  };
}*/