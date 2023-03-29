import React, { useState } from 'react'
import { InputForm } from './InputForm'
import { BsEyeSlash, BsEye } from 'react-icons/bs'
import { SuccessLogin } from './SuccessLogin'
import { useSelector, useDispatch } from 'react-redux'
import { logged } from '../slices/users'



export const Login = () => {
    const data = useSelector(state => state.users.data)
    const loginId = useSelector(state => state.users.login)
    const dispatch = useDispatch()

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const login = Object.fromEntries(formData.entries())
        const checkEmail = data.find(element => element.email === login.email)
        const checkPassword = data.find(element => element.password === login.password)
        if (checkEmail && checkPassword) {
            setLoginName(checkEmail.firstName)
            setSuccessLogin(true)
            dispatch(logged(checkEmail.id))
        }
        else {setStyledMessage({display:"block"})}
    }
    const [type, setType] = useState("password")

    const showPassword = () => {
        type === 'password' ? setType('text') : setType('password')
    }

    const [successLogin, setSuccessLogin] = useState(false)

    const [styledMessage, setStyledMessage] = useState({display:"none"})
    const handleChangeStyle = () => {
        setStyledMessage({display:"none"})
    }

    const [loginName, setLoginName] = useState()

  return (
    <div>
        {successLogin && <SuccessLogin name={loginName} />}
        {!successLogin &&
        <>
        <h3>Log in:</h3>
        <form onSubmit={submit}>
            <InputForm 
                autocomplete='on'
                type="email" 
                name="email" 
                label="Email"
                placeholder="Email"
                onChange={handleChangeStyle}
                />
            <div className='password'>
                <InputForm 
                    autocomplete='on'   
                    type={type} 
                    name="password" 
                    label="Password"
                    placeholder="Password"
                    onChange={handleChangeStyle}
                    />
                <div className='showPassword' onClick={showPassword}>
                    {type === "password" && <BsEye size={15}/>}
                    {type === "text" && <BsEyeSlash size={15}/>}
                </div>
            </div>
            <p style={styledMessage} className='emailErrMessage'>Wrong password or email</p>

            <button className='submitButton' type='submit'>Login</button>
        </form>        
</>
}
<button onClick={console.log(loginId)}>Check</button>
    </div>
  )
}
