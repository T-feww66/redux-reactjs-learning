// const initState = {
//     search: "",
//     status: "All",
//     priority: [],
// };

import { createSlice } from "@reduxjs/toolkit";

// const FiltersSlice = (state = initState, action) => {
//     switch (action.type) {
//         case "filters/searchText":
//             return { ...state, search: action.payload };
//         case "filters/statusFilter":
//             return { ...state, status: action.payload };
//         case "filters/prioritiesFilter":
//             return { ...state, priority: action.payload };
//         default:
//             return state;
//     }
// };

// export default FiltersSlice;

// cau hinh reducer bang redux toolkit

export default createSlice({
    name: "filters",
    initialState: {
        search: "",
        status: "All",
        priority: [],
    },
    reducers: {
        // mot reducer la mot function
        searchText: (state, action) => {
            //mutation => khong can phai sao chep lai state ma lam viec truc tiep o state do luoon
            state.search = action.payload;
        },
        statusFilter: (state, action) => {
            state.status = action.payload;
        },
        prioritiesFilter: (state, action) => {
            state.priority = action.payload;
        },
    },
});
