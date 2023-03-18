import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { usersData } from '../slices/users'
import { InputForm } from './InputForm'
import { nanoid } from '@reduxjs/toolkit'

export const NewUser = () => {
    const dispatch = useDispatch()

    const addToData = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const newUser = Object.fromEntries(formData.entries())
        newUser.id = nanoid();
        dispatch(usersData(newUser));
    }

    return (
        <div className='regist'>
            <h2> Sign up: </h2>
            <form onSubmit={addToData}>
                    <InputForm 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name"
                    />
                    <InputForm 
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name"
                    />
                    <InputForm 
                        type="date" 
                        name="birthdate" 
                        placeholder="Date of birth"
                    />
                    <InputForm 
                        type="email" 
                        name="email" 
                        placeholder="Email"
                    />
                    <InputForm 
                        autocomplete='on' 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                    />
                    <InputForm 
                        autocomplete='on' 
                        type="password" 
                        name="confirmPassword" 
                        placeholder="Confirm password"
                    />

                    <button className='submitButton' type='submit'>Register</button>
            </form>
        </div>
    )
    }
