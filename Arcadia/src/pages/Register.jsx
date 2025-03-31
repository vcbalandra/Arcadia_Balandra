import React from 'react';
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
        <FormRow type="password" name="password" labelText="Password" />
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