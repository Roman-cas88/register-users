import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addUser } from '../slices/users'
import { InputForm } from './InputForm'

export const NewUser = () => {
    const dispatch = useDispatch()

    const addToData = (e) => {
            e.preventDefault();
            const formData = new FormData(e.target)
            let newUser = Object.fromEntries(formData.entries())
            newUser.id = "002";
            console.log(newUser);
            // dispatch(addUser(newUser));
    }
    return (
        <Container>
            <h2> New user: </h2>
            <form onSubmit={addToData}>
                    <InputForm type="text" name="firstName" placeholder="First Name"/>
                    <InputForm type="text" name="lasttName" placeholder="Last Name"/>
                    <InputForm type="date" name="birthdate" placeholder="Date of birth"/>
                    <InputForm type="email" name="email" placeholder="Email"/>
                    <InputForm autocomplete='on' type="password" name="password" placeholder="Password"/>
                    <InputForm autocomplete='on' type="password" name="confirmPassword" placeholder="Confirm password"/>
                    <Button type='submit'>Register</Button>
            </form>
        </Container>
    )
    }
