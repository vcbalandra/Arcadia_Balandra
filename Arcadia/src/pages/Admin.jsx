import React from 'react'
import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';

export const loader = async () => {
    try {
      const response = await customFetch.get('/admin/dashboard');
      return response.data;
    } catch (error) {
      console.error(error);
      return redirect('/dashboard');
    }
  };

const Admin = () => {
  return (
    <div>Admin</div>
  )
}

export default Admin;