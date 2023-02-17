import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  
  border: 3px solid black;
  border-radius: 20px;
  height: 100%;
  
  
  background-color:#CD1D0C ;
  color:white ;
  
  button {
  background-color: white;
  color: black;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 600;
  padding: 1em 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid black;
  box-shadow: 0 0 0 0 black;
}



button:hover {
  transform: translateY(-4px) translateX(-2px);
  box-shadow: 2px 5px 0 0 black;
};

button:active {
  transform: translateY(2px) translateX(1px);
  box-shadow: 0 0 0 0 black;
};


  img {
    max-height: 25rem;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;


