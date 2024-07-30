// const initState = [
//     { id: 1, name: "Learn Redux", completed: true, priority: "Medium" },
//     { id: 2, name: "Learn Reducer", completed: false, priority: "Low" },
//     { id: 3, name: "Learn ReactJs", completed: false, priority: "High" },
// ];

import { createSlice } from "@reduxjs/toolkit";

// const TodoListSlice = (state = initState, action) => {
//     switch (action.type) {
//         case "todoList/addTodo":
//             return [...state, action.payload];
//         case "todoList/checkCompleted":
//             return state.map((todo) => {
//                 return todo.id === action.payload
//                     ? { ...todo, completed: !todo.completed }
//                     : todo;
//             });

//         default:
//             return state;
//     }
// };

// export default TodoListSlice;

export default createSlice({
    name: "todoList",
    initialState: [
        { id: 1, name: "Learn Redux", completed: true, priority: "Medium" },
        { id: 2, name: "Learn Reducer", completed: false, priority: "Low" },
        { id: 3, name: "Learn ReactJs", completed: false, priority: "High" },
    ],
    reducers: {
        addTodo: (state, action) => {
            return state.push(action.payload);
        },
        checkCompleted: (state, action) => {
            const currentTodo = state.filter(
                (todo) => todo.id === action.payload
            );

            currentTodo.completed = !currentTodo.completed;
        },
    },
});
