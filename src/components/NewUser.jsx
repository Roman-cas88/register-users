import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../slices/users'

export const NewUser = () => {
    const dispatch = useDispatch()
    let user = {
        firstName: '',
        lastName: '',
    }
    const [newUser, setNewUser] = useState(user)

const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setNewUser(values => ({...values, [name]:value}))
}

const addToData = () => {
    dispatch(addUser(newUser))
}
  return (
    <div>
        New user:
        <h1>Hello {newUser.firstName}</h1>
        <input type='text' placeholder='First name' name='firstName' value={newUser.name} onChange={handleChange} />
        <input type='text' placeholder='Last name' name='lastName' value={newUser.lastName} onChange={handleChange} />
        <button onClick={addToData}>Add user</button>
    </div>
  )
}
