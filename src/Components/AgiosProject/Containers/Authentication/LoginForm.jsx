import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSSModules/LoginStyles.css'
import { useAuth } from './AuthProvider';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    })
    const [errors, setErrors] = useState({});

    const navigate = useNavigate()
    const {login} = useAuth()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setErrors({ ...errors, [name]: '' });
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        //console.log(formData)

        const newErrors = {};
         if (formData.password.length <= 8) {
            newErrors.password = 'Password should be greater than 8 characters';
        }
        setErrors(newErrors);
        // Submit the form if there are no errors
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
             login()
             navigate('/agios/home');
            setFormData({
                userName: '',
                password: ''
            })
        }
    }
    
    return (
        <>
           <div className='forms'>
           <div className=" form-style">
                <h1 className='pb-4 text-center' style={{ color: 'brown' }}>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">User Name:</label>
                        <input type="text" name="userName" value={formData.userName} onChange={handleChange} required  autoComplete="off" />
                        {errors.userName && <span className="error">{errors.userName}</span>}
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <button className="btn btn-success mt-4 px-3">Submit</button>
                </form>
            </div>
           </div>
        </>
    )
}

export default LoginForm