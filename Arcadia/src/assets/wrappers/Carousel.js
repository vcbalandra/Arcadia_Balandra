import styled from 'styled-components';

const Wrapper = styled.div`
  .carousel-container {
  max-width: 700px;
  overflow: hidden;
  margin-top: 3rem;
}


.carousel-item .img {
  object-fit: cover;  
  height: 400px;
  width: 100%;  
  object-position: center center;
  border-radius: 10px;
}


.carousel-inner {
  transition: transform 1s ease-in-out; 
}


.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #000;  
  border-radius: 50%; 
}


.carousel-control-prev:hover,
.carousel-control-next:hover {
  background-color: rgba(0, 0, 0, 0.5); 
  border-radius: 10px;
}

@media (max-width: 480px) {
  .carousel-item img {
    object-position: center center; 
    height: 40px;  
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 30px; 
    height: 30px;
  }
}


@media (max-width: 768px) {
  .carousel-item img {
    height: 300px;  
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 35px;  
    height: 35px;
  }
}


@media (min-width: 992px) {
  .carousel-item img {
    height: 500px;  
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 40px;  
    height: 40px;
  }
}

`;

export default Wrapper;