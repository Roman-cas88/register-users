import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

export const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        usersData: (state, action) => {
        //    state.data = [...state.data, action.payload]
        state.data.push(action.payload)
        }
    }
})

export const { usersData } = users.actions
export default users.reducer