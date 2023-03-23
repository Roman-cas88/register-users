import React, { useState } from 'react'
import { InputForm } from './InputForm'
import { BsEyeSlash, BsEye } from 'react-icons/bs'


export const Login = () => {

    const submit = (e) => {
        e.preventDefault();
        console.log('check');
    }
    const [type, setType] = useState("password")

    const showPassword = () => {
        type === 'password' ? setType('text') : setType('password')
    }

  return (
    <div className='login'>
        <h3>Log in:</h3>
        <form onSubmit={submit}>
            <InputForm 
                type="email" 
                name="email" 
                label="Email"
                placeholder="Email"
                />
            <div className='password'>
                <InputForm 
                    type={type} 
                    name="password" 
                    label="Password"
                    errMessage="Password should be 8-20 characters and include at least 1 letter and 1 number!"
                    pattern="^(?=.*[0-9])(?=.*[a-za-z])(?=.*[A-ZA-Z])[a-zA-Z0-9!@#$%^&*()-_)]{8,20}$"
                    placeholder="Password"
                    />
                <div className='showPassword' onClick={showPassword}>
                    {type === "password" && <BsEye size={15}/>}
                    {type === "text" && <BsEyeSlash size={15}/>}
                </div>
            </div>
            <button className='submitButton' type='submit'>Login</button>
        </form>
        
    </div>
  )
}
