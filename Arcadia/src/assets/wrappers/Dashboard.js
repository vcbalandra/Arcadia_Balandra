import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f4f4f9;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  justify-content: center;
  text-align: center;

  .tabs {
  display: flex;
  margin-bottom: 20px;
}

.tab-btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f4f4f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s;
}

.tab-btn:hover {
  background-color: #eaeaea;
}

.tab-btn.active {
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
}

.btn {
    margin-top: 1.5rem;
    width: 8vw; 
    padding: 1rem;
    background-color: #008080; 
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #004d4d;
  }
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 20px;
`;

const Sidebar = styled.aside`
  width: 300px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-right: 20px;
  border-radius: 8px;
`;

const Content = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const DashboardPage = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export default Wrapper;