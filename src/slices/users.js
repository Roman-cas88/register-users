import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     data: [],
// };

// const loginsData = {
//     logins: [],
// }

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

// export const logins = createSlice({
//     name: 'logins',
//     loginsData,
//     reducers: {
//         newLogin: (state, action) => {
//             state.data.push(action.payload)
//         }
//     }
// })

export const { addUser, logged } = users.actions
