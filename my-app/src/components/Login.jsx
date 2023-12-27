import React from 'react'
import { useState } from 'react';

import axios from 'axios';


export default function login() {

    var [formData, setFormData] = useState({
        userName: "",
        password: ""
    })

    var [formDataError, setFormDataError] = useState({
        userNameError: "",
        passwordError: ""
    })

    var [formDataButton, setFormDataButton] = useState({
        userNameButton: "",
        passwordButton: ""
    })
    var [message, setMesseges] = useState({
        errorMessage: "",
        successMessage: ""

    })
    console.log(message.successMessage);
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setFormData((pre) => {
            return { ...pre, [e.target.name]: e.target.value }
        }, validate(e.target.name, e.target.value))
    }

    const validate = (name, value) => {
        if (name == "userName") {
            const namePattern = /^[a-z]+[@][a-z]{3,7}(.com||.in)$/
            if (value == "") {
                setFormDataError((pre) => {
                    return { ...pre, userNameError: "Enter user name" }
                })
                setFormDataButton((pre) => {
                    return { ...pre, userNameButton: false }
                })
            }
            else if (!(value.toString().match(namePattern))) {
                setFormDataError((pre) => {
                    return { ...pre, userNameError: "Enter User Name abccn@jdnkjds.com or dsfg@sghj.in" }
                })
                setFormDataButton((pre) => {
                    return { ...pre, userNameButton: false }
                })
            }
            else {
                setFormDataError((pre) => {
                    return { ...pre, userNameError: "" }
                })
                setFormDataButton((pre) => {
                    return { ...pre, userNameButton: true }
                })
            }
        }
        else if (name == "password") {
            const namePattern = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/
            if (value == "") {
                setFormDataError((pre) => {
                    return { ...pre, passwordError: "Enter Password" }
                })
                setFormDataButton((pre) => {
                    return { ...pre, passwordButton: false }
                })
            }
            else if (!(value.toString().match(namePattern))) {
                setFormDataError((pre) => {
                    return { ...pre, passwordError: "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" }
                })
                setFormDataButton((pre) => {
                    return { ...pre, passwordButton: false }
                })
            }
            else {
                setFormDataError((pre) => {
                    return { ...pre, passwordError: "" }
                })
                setFormDataButton((pre) => {
                    return { ...pre, passwordButton: true }
                })
            }
        }

    }

    const submitData = (e) => {
        e.preventDefault()
        console.log(formData);
        axios.post('http://localhost:5000/User', formData)
            .then(function (response) {
                setMesseges((pre) => {
                    return { ...pre, successMessage: "Login Successfull" }
                })
                localStorage.setItem("userName", formData.userName)
                localStorage.setItem("password", formData.password)

            },
                //  setTimeout(() => {
                //   router.push("/home") 
                //  },1000),
            )
            .catch(function (error) {
                setMesseges((pre) => {
                    return { ...pre, errorMessage: "Server Not Respond" }

                })

            });
    }

    return (
    <div className='w-full h-[550px] flex justify-center items-center bg-gradient-to-br from-violet-500 to-fuchsia-500'>
        <div className='text-center border-2 p-3 border-amber-100 rounded-md'>
        <h1 className='mt-6 sm:text-4xl text-2xl sm:font-bold my-2'>Login</h1>
        <form className='h-auto  sm:w-[500px] w-auto' >

<div>
    <label className="block text-sm font-medium leading-6 text-left">Username</label>
    <input
        className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="text"
        name="userName"
        required
        onChange={handleChange}
    />
    {formDataError.userNameError && <div className='text-left text-sm'>{formDataError.userNameError}</div>}
</div>
<div>
    <label className="block text-sm font-medium leading-6  text-left">Password</label>
    <input
        className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        name="password"
        required
        onChange={handleChange}
        aria-describedby="passwordHelpBlock"
    />
    {formDataError.passwordError && <div className='text-left text-sm '>{formDataError.passwordError}</div>}
</div>
<div>
    <button className='bg-blue-400 w-full h-8 rounded-md mt-4' onClick={submitData}
    disabled={!(formDataButton.userNameButton && formDataButton.passwordButton)}>Login</button>
    {message.errorMessage && <div className=' text-center'>{message.errorMessage}</div>}
    {message.successMessage && <div className='text-center'>{message.successMessage}</div>}
    <div className='text-center'><a href='/register' >New user register Please</a></div>
</div>
</form>
        </div>

    </div>

    )
}
