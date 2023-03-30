import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../slices/users'
import { InputForm } from './InputForm'
import { nanoid } from '@reduxjs/toolkit'
import { BsEyeSlash, BsEye } from 'react-icons/bs'
import { SuccessReg } from './SuccessReg'
import { DatePicker } from './DatePicker'


export const NewUser = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.users.data)

    const addToData = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const newUser = Object.fromEntries(formData.entries())
        newUser.id = nanoid();
        newUser.birthday = birthday;
        const checkUser = data.find(element => element.email === newUser.email)
        if (!checkUser) {
            dispatch(addUser(newUser)); 
            setSuccessRegister(true)
        }
        else {setStyledMessage({display:"block"})}
    }

    const [birthday, setBirthday] = useState()
    const pickBirthday = (info) => {
        setBirthday(info)
    }

    const [checkPassword, setСheckPassword] = useState()

    const [type, setType] = useState("password")

    const showPassword = () => {
        type === 'password' ? setType('text') : setType('password')
    }

    const [styledMessage, setStyledMessage] = useState({display:"none"})
    const handleChangeStyle = () => {
        setStyledMessage({display:"none"})
    }

    const [succesRegister, setSuccessRegister] = useState(false)

    return (
        <div>
        {succesRegister && <SuccessReg />}
        {!succesRegister && 
            <>
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
                    <DatePicker pickBirthday={pickBirthday}/>
                    <InputForm 
                        type="email" 
                        name="email" 
                        label="Email"
                        errMessage="Should be a valid email address"
                        placeholder="Email"
                        onChange={handleChangeStyle}
                        />
                        <p style={styledMessage} className='emailErrMessage'>Email address is already registered!</p>
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
            </>
        }
        </div>
    )
    }
