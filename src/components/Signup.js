import React, { useState } from 'react'
import '../App.css'
import * as yup from 'yup'
import axios from 'axios'
import {useHistory} from "react-router-dom"



const formSchema = yup.object().shape({
    full_name: yup.string().required('Must Include Full Name'),
    // lname: yup.string().required('Must Include Last Name'),
    // email: yup.string().email().required('Must Include A Valid Email'),
    username: yup.date().required('Must Include Username'),
    password: yup.string().required('Must Include A Valid Password')
})

export default function Signup() {
    const { push } = useHistory();
    const [form, setFormData] = useState({
        username: "",
        password:"",
        full_name:"",
        signup_code:"",
    })

    const [formError, setFormError] = useState({
        username: "",
        password:"",
        full_name:"",
        signup_code:"",

    })

    const validation = (e) => {
        yup
        .reach(formSchema, e.target.name)
        .validation(e.target.value)
        .then((validate) => {
            setFormError({ ...formError, [e.target.name]: '' })
        })
        .catch((error) => {
            setFormError({
                ...formError,
                [e.target.name]: error.errors[0],
            })
        })
    }

    // axios.post('/https://anywherefitness2.herokuapp.com/', {
    //     username: "",
    //     password:"",
    //     full_name:"",
    //     signup_code:"",
    // }).then(response => {
    //     console.log(response)
    // })

    const changeHandler = (e) => {
        e.persist();
        setFormData({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('https://anywherefitness2.herokuapp.com/api/auth/register', form)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            
            setFormData(response.data)
            console.log(response.data)
            push('/')
      })
      .catch(err => {
          console.log(err)
      })
    }
    
    return (
        <div className='form-signup'> 
            <h1 className='signup-h1'>Sign Up</h1>
            <form onSubmit={submitHandler}>
             <label htmlFor='username'><strong>Username </strong></label><br />
             <input type='text' id='username' name='username' onChange={changeHandler} />
             <br />
             <br />
             <label htmlFor='password'><strong>Password: </strong></label><br />
             <input type='text' id='password' name='password' onChange={changeHandler}/>
             <br />
             <br />
             <label htmlFor='full_name'><strong>Full Name: </strong></label><br />
             <input type='text' id='full_name' name='full_name' onChange={changeHandler} />
             <br />
             <br />
             <label htmlFor='signup_code'><strong>Signup Code </strong></label><br />
             <input type='text' id='signup_code' name='signup_code' onChange={changeHandler} />
             <br />
             <br />
             <button type='submit' onSubmit={submitHandler}>Submit</button>
            </form>
        </div>
    )
}
