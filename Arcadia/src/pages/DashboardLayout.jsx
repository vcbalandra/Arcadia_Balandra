import { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Outlet, redirect, useNavigate, useLocation, Link   } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/Dashboard';
import AdminNavbar from '../components/AdminNavbar';
import { toast } from 'react-toastify';

const userQuery = {
  queryKey: ['user'],
  queryFn: async () => {
    const { data } = await customFetch.get('/admin/current-user');
    console.log(data);
    return data;
  },
};

export const loader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    console.error('Error loading user:', error);
    return redirect('/login');
  }
};

const DashboardContext = createContext();

const DashboardLayout = ({ queryClient }) => {
  const location = useLocation();
  const { data: user, isLoading, isError } = useQuery(userQuery);
  const navigate = useNavigate();
  const [isAuthError, setIsAuthError] = useState(false);
  const [activeTab, setActiveTab] = useState('addEvent'); 
  
  
  const logoutUser = async () => {
    navigate('/login');
    await customFetch.get('/auth/logout');
    queryClient.invalidateQueries();
    toast.success('Logging out...');
  };

  customFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        setIsAuthError(true);
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (!isAuthError) return;
    logoutUser();
  }, [isAuthError]);

  useEffect(() => {
    // You can update the active tab based on the URL if necessary.
    if (location.pathname.includes('add-event')) {
      setActiveTab('addEvent');
    } else if (location.pathname.includes('all-events')) {
      setActiveTab('allEvents');
    }
  }, [location]);

  // const handleTabSwitch = (tab) => {
  //   setActiveTab(tab);
  // };

  if (isLoading) {
    return <div>Loading user...</div>;
  }

  if (isError || !user) {
    return <div>Authentication failed or user not found. Please login again.</div>;
  }

  return (
    <DashboardContext.Provider
    value={{
      user,
      logoutUser,
    }}
    >
       <Wrapper>
      <AdminNavbar />
      <main className="dashboard">
  <div className="tabs">
    <Link
      to="/dashboard/add-event"
      className={`tab-btn ${activeTab === 'addEvent' ? 'active' : ''}`}
      onClick={() => setActiveTab('addEvent')}
    >
      Add Event
    </Link>
    <Link
      to="/dashboard/all-events"
      className={`tab-btn ${activeTab === 'allEvents' ? 'active' : ''}`}
      onClick={() => setActiveTab('allEvents')}
    >
      Admin Event List
    </Link>
  </div>
  <div className="tab-content">
    <Outlet />  {/* This renders the nested routes */}
  </div>
</main>
    </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;