import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { usersData } from '../slices/users'
import { InputForm } from './InputForm'
import { nanoid } from '@reduxjs/toolkit'
import { BsEyeSlash, BsEye } from 'react-icons/bs'

export const NewUser = () => {
    const dispatch = useDispatch()

    const addToData = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const newUser = Object.fromEntries(formData.entries())
        newUser.id = nanoid();
        dispatch(usersData(newUser));
    }

    const [checkPassword, setСheckPassword] = useState()

    const [type, setType] = useState("password")

    const showPassword = () => {
        type === 'password' ? setType('text') : setType('password')
    }

    return (
        <div className='regist'>
            <h3> Sign up: </h3>
            <form onSubmit={addToData}>
                    <InputForm 
                        type="text" 
                        name="firstName" 
                        label="First name"
                        errMessage="First name could't incloude any numbers or special character!"
                        pattern="^[A-Za-z]{3,19}$"
                        placeholder="First Name"
                        />
                    <InputForm 
                        type="text" 
                        name="lastName" 
                        label="Last name"
                        errMessage="Last name could't incloude any numbers or special character!"
                        pattern="^[A-Za-z]{3,19}$"
                        placeholder="Last Name"
                        />
                    <InputForm 
                        type="date" 
                        name="birthdate" 
                        label="Date of birth"
                        errMessage="You must be over 12 years old"
                        placeholder="Date of birth"
                        />
                    <InputForm 
                        type="email" 
                        name="email" 
                        label="Email"
                        errMessage="Should be a valid email address"
                        placeholder="Email"
                        />
                    <div className='password'>
                        <InputForm 
                            autocomplete='on'
                            type={type} 
                            name="password" 
                            label="Password"
                            errMessage="Password should be 8-20 characters and include at least 1 letter and 1 number!"
                            pattern="^(?=.*[0-9])(?=.*[a-za-z])(?=.*[A-ZA-Z])[a-zA-Z0-9!@#$%^&*()-_)]{8,20}$"
                            placeholder="Password"
                            onChange={(e) => setСheckPassword(e.target.value)}
                            />
                            <div className='showPassword' onClick={showPassword}>
                                {type === "password" && <BsEye size={15}/>}
                                {type === "text" && <BsEyeSlash size={15}/>}
                            </div>
                    </div>
                    <InputForm 
                        autocomplete='on' 
                        type={type} 
                        name="confirmPassword" 
                        label="Confirm password"
                        errMessage="Passwords don't match!"
                        placeholder="Confirm password"
                        pattern={checkPassword}
                        />
                    <button className='submitButton' type='submit'>Register</button>
            </form>
        </div>
    )
    }
