import React, { useState } from 'react'
import * as yup from 'yup'
import schema from '../../schema/loginSchema';
import axios from 'axios'
import { useHistory } from "react-router-dom"



const initialFormValues = {
    username: "",
    password: ""
}

export default function Login() {
    const { push } = useHistory();
    const [form, setFormData] = useState(initialFormValues);

    const [formError, setFormError] = useState(initialFormValues);

    const validate = (name, value) => {
        yup
        .reach(schema, name)
            .validate(value)
                .then(() => {
                    setFormError({
                        ...formError,
                        [name]: ''
                    })
                })
                .catch((error) => {
                    setFormError({
                        ...formError,
                        [name]: error.errors[0]
                    })
                })
    }

    const changeHandler = (e) => {
        e.persist();
        const { name, value } = e.target;

        setFormData({
            ...form,
            [e.target.name]: e.target.value
        })

        validate(name, value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('https://anywherefitness2.herokuapp.com/api/auth/login', { username: form.username, password: form.password })
            .then(response => {
                localStorage.setItem('token', response.data.token);

                console.log(response.data)
                push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    return (
        <div className='form-signup'> 
            <h1 className='signup-h1'>Login</h1>
            <form onSubmit={submitHandler}>
             <label htmlFor='username'><strong>Username </strong></label><br />
             <input type='text' id='username' name='username' onChange={changeHandler} />
             <br />
             <br />
             <label htmlFor='password'><strong>Password: </strong></label><br />
             <input type='text' id='password' name='password' onChange={changeHandler}/>
             <br />
             <br />

             <button type='submit' onSubmit={submitHandler}>Submit</button>
            </form>
        </div>
    )
}
