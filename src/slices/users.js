import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

export const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
           state.data = [...state.data, action.payload]
        }
    }
})

export const { addUser } = users.actions
export default users.reducer