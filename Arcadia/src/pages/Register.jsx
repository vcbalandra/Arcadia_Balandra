import React, { useState } from 'react';
import { Form, redirect, Link } from 'react-router-dom';
import Logo from '../components/Logo';
import FormRow from '../components/FormRow';
import SubmitBtn from '../components/SubmitBtn';
import Wrapper from '../assets/wrappers/RegisterAndLogin';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';

// Action to handle form submission
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/auth/register', data);
    console.log('Registration successful:', response);
    toast.success('Registration successful! Please log in.'); 
    return redirect('/login');
  } catch (error) {
    console.error('Registration error:', error?.response?.data?.msg);
    toast.error(error?.response?.data?.msg || 'Registration failed'); 
    return error;
  }
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [password, setPassword] = useState(''); // Controlled password input state

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Wrapper>
      <Navbar/>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" labelText="Name" />
        <FormRow type="text" name="lastName" labelText="Last Name" />
        <FormRow type="text" name="location" labelText="Location" />
        <FormRow type="email" name="email" labelText="Email" />
        <FormRow  type={showPassword ? 'text' : 'password'} 
            labelText="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required />
              <div className="show-password">
            <input
              type="checkbox"
              id="show-password"
              checked={showPassword}
              onChange={handlePasswordToggle}
            />
            <label htmlFor="show-password">Show Password</label>
          </div>
        <SubmitBtn />
        <p>
          Already a Admin?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;