import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'http://localhost:5100',  
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default customFetch;