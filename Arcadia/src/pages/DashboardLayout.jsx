import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, Link, redirect } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Wrapper from '../assets/wrappers/Dashboard';
import customFetch from '../utils/customFetch';

export const loader = async () => {
  try {
    const response = await customFetch.get('/admin/current-user');
    return response.data;  // Return the user data if authenticated
  } catch (error) {
    console.error('Error fetching current user:', error);
    // Redirect to login page if not authenticated
    return redirect('/login');
  }
};

const DashboardLayout = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('addEvent');

  // Update active tab based on current URL path
  useEffect(() => {
    if (location.pathname.includes('add-event')) {
      setActiveTab('addEvent');
    } else if (location.pathname.includes('event-list')) {
      setActiveTab('eventList');
    } else if (location.pathname.includes('admin')) {
      setActiveTab('admin');
    }
  }, [location]);

  return (
    <Wrapper>
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">

          {/* Content for active tab */}
          <div className="tab-content">
            <Outlet />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DashboardLayout;