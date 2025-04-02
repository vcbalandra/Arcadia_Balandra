import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
    .logout-container {
  position: relative;
  display: inline-block;
}

.logout-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #333;
}

.logout-btn:hover {
  color: #007bff;
}

.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 120px;
}

.dropdown.show-dropdown {
  display: block;

}

.dropdown-btn {
  padding: 10px;
  width: 100%;
  border: none;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
}

.dropdown-btn:hover {
  background-color: #f4f4f9;
}
`;

export default Wrapper;
