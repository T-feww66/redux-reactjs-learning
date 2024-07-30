export const addTodo = (data) => {
    return {
        type: "todoList/addTodo",
        payload: data,
    };
};

export const searchFilter = (text) => {
    return {
        type: "filters/searchText",
        payload: text,
    };
};

export const statusFilter = (status) => {
    return {
        type: "filters/statusFilter",
        payload: status,
    };
};

export const prioritiesFilter = (priorities) => {
    return {
        type: "filters/prioritiesFilter",
        payload: priorities,
    };
};

export const checkCompleted = (id) => {
    return {
        type: "todoList/checkCompleted",
        payload: id,
    };
};
