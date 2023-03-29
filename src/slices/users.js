import { createSlice } from "@reduxjs/toolkit";

export const users = createSlice({
    name: 'users',
    initialState: {
        data:[],
        login: '',
    },
    reducers: {
        addUser: (state, action) => {
        state.data.push(action.payload)
        },
        logged: (state, action) => {
            state.login = action.payload
        }
    }
})

export const { addUser, logged } = users.actions
