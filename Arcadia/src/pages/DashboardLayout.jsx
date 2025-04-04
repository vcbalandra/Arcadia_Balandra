import React, { useState, useEffect, useContext, createContext } from 'react';
import { Outlet, useLocation, Link, redirect, useNavigate, useNavigation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Loading from '../components/Loading';
import AdminNavbar from '../components/AdminNavbar';
import Wrapper from '../assets/wrappers/Dashboard';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

const userQuery = {
  queryKey: ['user'],
  queryFn: async () => {
    const { data } = await customFetch.get('/admin/current-user');
    return data;
  },
};

export const loader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    return redirect('/login');
  }
};

const DashboardContext = createContext();

const DashboardLayout = ({ queryClient }) => {
  const { user } = useQuery(userQuery).data;
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const [isAuthError, setIsAuthError] = useState(false);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('addEvent');

  const logoutUser = async () => {
    navigate('/login');
    await customFetch.get('/auth/logout');
    queryClient.invalidateQueries();
    toast.success('Logged out');
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
    if (location.pathname.includes('add-event')) {
      setActiveTab('addEvent');
    } else if (location.pathname.includes('event-list')) {
      setActiveTab('eventList');
    } else if (location.pathname.includes('admin')) {
      setActiveTab('admin');
    }
  }, [location]);

  return (
    <DashboardContext.Provider
    value={{
      user,
      logoutUser,
    }}
  >
    <Wrapper>
      <AdminNavbar />
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">

          <div className="tab-content">
          {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
          </div>
        </div>
      </div>
    </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;