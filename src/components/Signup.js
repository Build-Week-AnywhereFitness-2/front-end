import React, { useState } from 'react'
import '../App.css'
import * as yup from 'yup'
import axios from 'axios'



const formSchema = yup.object().shape({
    fname: yup.string().required('Must Include First Name'),
    lname: yup.string().required('Must Include Last Name'),
    email: yup.string().email().required('Must Include A Valid Email'),
    dob: yup.date().required('Must Include A Valid Date Of Birth'),
    pw: yup.string().required('Must Include A Valid Password')
})

export default function Signup() {
    const [form, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        dob: '',
        pw: ''
    })

    const [formError, setFormError] = useState({
        fname: '',
        lname: '',
        email: '',
        dob: '',
        pw: ''

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

    axios.post('/signup', {
        fname: '',
        lname: '',
        email: '',
        dob: '',
        pw: ''
    }).then(response => {
        console.log(response)
    })

    const changeHandler = (e) => {
        setFormData({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('/signup', {
          fname: '',
          lname: '',
          email: '',
          dob: '',
          pw: ''
      }).then(response => {
        setFormData(response.data)
          console.log(response.data)
      })
    }
    
    return (
        <div className='form-signup'> 
            <h1 className='signup-h1'>Sign Up</h1>
            <form>
             <label htmlFor='fname'><strong>First Name: </strong></label><br />
             <input type='name' id='fname' name='fname' onChange={changeHandler} />
             <br />
             <br />
             <label htmlFor='lname'><strong>Last Name: </strong> </label><br />
             <input type='name' id='lname' name='lname' onChange={changeHandler} />
             <br />
             <br /> 
             <label htmlFor='email'><strong>Email:</strong></label><br />
             <input type='email' id='email' name='email' onChange={changeHandler} />
             <br />
             <br /> 
             <label htmlFor='dob'><strong>Date of birth: </strong></label><br />
             <input type='date' id='dob' name='dob' onChange={changeHandler} />
             <br />
             <br /> 
             <label htmlFor='pw'><strong>Password: </strong></label><br />
             <input type='password' id='pw' name='pw' onChange={changeHandler}/>
             <br />
             <br />
             <input type='submit' onSubmit={submitHandler} />
            </form>
        </div>
    )
}
