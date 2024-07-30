import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const textSearch = (state) => state.filters.search;
export const statusFilter = (state) => state.filters.status;
export const prioritiesFilter = (state) => state.filters.priority;

export const remeaningSelector = createSelector(
    todoListSelector,
    statusFilter,
    textSearch,
    prioritiesFilter,
    (todoList, status, text, priorities) => {
        console.log(priorities);
        return todoList.filter((todo) => {
            if (status === "All") {
                return priorities.length
                    ? todo.name.toLowerCase().includes(text.toLowerCase()) &&
                          priorities.includes(todo.priority)
                    : todo.name.toLowerCase().includes(text.toLowerCase());
            }

            return (
                todo.name.toLowerCase().includes(text.toLowerCase()) &&
                (status === "Completed"
                    ? todo.completed
                    : !todo.completed) &&
                (priorities.length ? priorities.includes(todo.priority) : true)
            );
        });
    }
);
