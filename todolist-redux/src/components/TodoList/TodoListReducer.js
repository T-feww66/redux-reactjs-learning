const initState = [
    { id: 1, name: "Learn Redux", completed: true, priority: "Medium" },
    { id: 2, name: "Learn Reducer", completed: false, priority: "Low" },
    { id: 3, name: "Learn ReactJs", completed: false, priority: "High" },
];

const TodoListReducer = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return [...state, action.payload];
        case "todoList/checkCompleted":
            return state.map((todo) => {
                return todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo;
            });

        default:
            return state;
    }
};

export default TodoListReducer;
