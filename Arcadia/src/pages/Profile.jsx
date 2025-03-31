import React from 'react'
import { useOutletContext, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get('avatar');
    if (file && file.size > 500000) {
      console.error('Image size too large');
      return null;
    }
    try {
      await customFetch.patch('/users/update-user', formData);
      queryClient.invalidateQueries(['user']);
      console.log('Profile updated successfully');
      return redirect('/dashboard');
    } catch (error) {
      console.log(error);
      return null;
    }
  };

const Profile = () => {
  return (
    <div>Profile</div>
  )
}

export default Profile;