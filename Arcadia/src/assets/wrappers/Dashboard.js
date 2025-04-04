import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f4f4f9;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  justify-content: center;
  text-align: center;

  .dashboard-container {
    display: flex;
    min-height: 100vh;
  }
  
  .sidebar {
    width: 250px;
    background-color: #008080;
    padding-top: 20px;
    color: white;
  }
  
  .sidebar .logo {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .sidebar .sidebar-links {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar .sidebar-link {
    display: block;
    padding: 15px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    margin: 10px 0;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .sidebar .sidebar-link:hover {
    background-color: #34495e;
  }
  
  .dashboard-content {
    flex-grow: 1;
    width: 100%;
  }
  
  .tabs {
    display: flex;
    margin-bottom: 20px;
  }
  
  .tab-btn {
    padding: 10px 20px;
    margin-right: 20px;
    font-size: 18px;
    color: #34495e;
    text-decoration: none;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #ecf0f1;
  }
  
  .tab-btn.active {
    background-color: #3498db;
    color: white;
  }
  
  .tab-content {
    padding: 20px;
    background-color: #ecf0f1;
    border-radius: 5px;
  }


    .form-control {
    width: 30rem;
    margin-left: 25rem;
    margin-top: 20px;
    /* Use max-width to ensure it doesn't overflow on small screens */
    max-width: 100%;
  }

  /* Responsive design for smaller screens */
  @media (max-width: 768px) {
    .sidebar {
      width: 200px;  /* Reduce sidebar width */
    }

    .form-control {
      width: 90%;  /* Take up most of the screen width */
      margin-left: 5%;  /* Center the form */
    }

    .dashboard-container {
      flex-direction: column;  /* Stack sidebar and content vertically */
    }

    .tabs {
      flex-direction: column;  /* Stack tabs vertically on small screens */
    }

    .tab-btn {
      margin-right: 0;
      width: 100%;  /* Make buttons take full width */
    }

    .sidebar .sidebar-link {
      font-size: 16px;  /* Reduce font size on smaller screens */
    }
  }

  @media (max-width: 480px) {
    .sidebar {
      width: 100%;  /* Sidebar takes full width */
      height: auto;  /* Sidebar height adjusts */
      padding-top: 10px;
    }

    .form-control {
      width: 100%;  /* Form field takes full width */
      margin-left: 0;  /* No margin left */
    }

    .tabs {
      display: block;  /* Stack the tabs vertically */
    }

    .tab-btn {
      width: 100%;  /* Make each tab button take full width */
      margin-bottom: 10px;  /* Space between buttons */
    }

    .sidebar .sidebar-link {
      font-size: 14px;  /* Further reduce font size */
    }
  }
  `;

export default Wrapper;