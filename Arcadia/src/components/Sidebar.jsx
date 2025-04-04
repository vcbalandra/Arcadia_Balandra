import React from 'react';
import { Link } from 'react-router-dom';
// import './Sidebar.css';  

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Admin Dashboard</h2>
      </div>
      <ul className="sidebar-links">
        <li>
          <Link to="/dashboard/add-event" className="sidebar-link">Add Event</Link>
        </li>
        <li>
          <Link to="/dashboard/all-events" className="sidebar-link">Event List</Link>
        </li>
        <li>
          <Link to="/admin" className="sidebar-link">Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;