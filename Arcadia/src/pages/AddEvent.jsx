import React from 'react'
import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post('/events', data);
      queryClient.invalidateQueries(['events']);
      console.success('Event added successfully ');
      return redirect('all-events');
    } catch (error) {
      console.error(error?.response?.data?.msg);
      return error;
    }
  };

const AddEvent = () => {
  return (
    <div>AddEvent</div>
  )
}

export default AddEvent;