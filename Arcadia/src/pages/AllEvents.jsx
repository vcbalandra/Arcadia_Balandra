import React from 'react'
import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';

export const loader = async () => {
    try {
      const response = await  customFetch.get('/admin/all-events');
      return response.data;
    } catch (error) {
     console.log(error);
      return redirect('/dashboard');
    }
  };
  

  const AllEvents = () => {
    const events = [
      { id: 1, name: 'Event 1', date: '2025-05-01', description: 'This is the description for Event 1.' },
      { id: 2, name: 'Event 2', date: '2025-06-01', description: 'This is the description for Event 2.' },
      { id: 3, name: 'Event 3', date: '2025-07-01', description: 'This is the description for Event 3.' },
    ];
  
    return (
      <div>
        <h2>Event List</h2>
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.description}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default AllEvents;