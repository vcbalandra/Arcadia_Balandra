import React, { useState } from 'react';
import { Form, Link, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../components/Logo';
import FormRow from '../components/FormRow';
import SubmitBtn from '../components/SubmitBtn';
import Wrapper from '../assets/wrappers/RegisterAndLogin';
import customFetch from '../utils/customFetch';
import Navbar from '../components/Navbar';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/auth/login', data);
    console.log(response);
    toast.success('Login successful');
    return redirect('/dashboard'); 
  } catch (error) {
    toast.error(error?.response?.data?.msg || 'Login failed');
    return error;
  }
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const handleCheckboxChange = (e) => {
    setShowPassword(e.target.checked); 
  };

  return (
    <Wrapper>
      <Navbar />
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow 
          type="email" 
          name="email" 
          labelText="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
          <FormRow 
            type={showPassword ? 'text' : 'password'}  // Toggle between 'text' and 'password' based on showPassword state
            name="password" 
            labelText="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <div className="show-password">
            <input 
              type="checkbox" 
              id="show-password" 
              checked={showPassword} 
              onChange={handleCheckboxChange} 
            />
            <label htmlFor="show-password">Show Password</label>
          </div>
        <SubmitBtn />
        <p>
          Not an Admin yet? <Link to="/register" className="member-btn">Register</Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;