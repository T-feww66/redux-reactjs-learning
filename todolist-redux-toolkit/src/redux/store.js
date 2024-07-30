// import { createStore } from "redux";

// import rootReducer from "./reducer";

// const store = createStore(rootReducer);

// export default store;

// redux toolkit ne

import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import todoListSlice from "../components/TodoList/todoListSlice";

// su dung thay the cho  createStore cho redux thong thuong
const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer,
    },
});

export default store;
