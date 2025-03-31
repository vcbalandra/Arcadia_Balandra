import React from 'react';
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import AdminNavbar from '../components/AdminNavbar';

export const loader = async () => {
  try {
    const response = await fetch('/admin/dashboard');
    return response.data;
  } catch (error) {
   alert(error);
    return redirect('/');
  }
};

const DashboardLayout = () => {
  return (
    <Wrapper>
     <AdminNavbar />
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li>
            <Link to="/dashboard/events">Add Events</Link>
          </li>
          <li>
            <Link to="/dashboard/admin">Admin</Link>
          </li>
        </ul>
      </div>
      <div className="content-area">
        <h1>Dashboard Content Area</h1>

      </div>
    </div>
    </Wrapper>
  );
};

export default DashboardLayout;

