import React, { useState } from 'react'
import { InputForm } from './InputForm'
import { BsEyeSlash, BsEye } from 'react-icons/bs'
import { SuccessLogin } from './SuccessLogin'


export const Login = () => {

    const submit = (e) => {
        e.preventDefault();
        console.log('check');
    }
    const [type, setType] = useState("password")

    const showPassword = () => {
        type === 'password' ? setType('text') : setType('password')
    }

    const [successLogin, setSuccessLogin] = useState(false)

  return (
    <div>
        {!successLogin && <SuccessLogin />}
        {successLogin &&
        <>
        <h3>Log in:</h3>
        <form onSubmit={submit}>
            <InputForm 
                type="email" 
                name="email" 
                label="Email"
                errMessage="Error Message"
                placeholder="Email"
                />
            <div className='password'>
                <InputForm 
                    type={type} 
                    name="password" 
                    label="Password"
                    errMessage="Error Message"
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
</>
}
    </div>
  )
}
