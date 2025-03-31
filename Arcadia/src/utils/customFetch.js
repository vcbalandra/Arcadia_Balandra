import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'http://localhost:5100',  
  headers: {
    'Content-Type': 'application/json',
  },
});

export default customFetch;