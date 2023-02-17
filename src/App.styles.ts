import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 70rem;
  margin-top: 7rem;
  margin-left: 1rem;
  
`;


export const Navbar = styled.div`
background-color: #E76F02;
width: 70rem;
border-radius: 50px 50px 50px 50px;
`

export const H1navbar = styled.h1`
color: white;
margin-left: 2rem;

`
export const BtnCart = styled.button`
margin-top: -8.5rem;
position:absolute;
margin-left: 71rem;

background-color: white;
  color: black;
  border-radius: 10em;
  font-size: 17px;
  font-weight: 600;
  padding: 1em 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid black;
  box-shadow: 0 0 0 0 black;

  &:hover{
    transform: translateY(-4px) translateX(-2px);
  box-shadow: 2px 5px 0 0 black;
  }
  &:active{
    transform: translateY(2px) translateX(1px);
  box-shadow: 0 0 0 0 black;
  }
`