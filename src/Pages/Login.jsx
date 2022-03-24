import React from 'react'
import styled from 'styled-components';
import login from "../assets/login.jpg"
import {mobile} from "../Responsive.js"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)), url(${login});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  ${mobile({padding:"20",width:"80%"})}
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
`;
export const Input = styled.input`
  flex:1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding:10px;
  border: 1px solid gray;
`;

export const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  background-color: teal;
  color:#fff;
  cursor:pointer;
  margin-top: 20px;
  ${mobile({paddingTop:"10px",paddingBottom:"10px",paddingLeft:"5px",paddingRight:"5px"})}
  
`;
const Link = styled.a`
  display: block;
  margin-top: 10px;
  cursor: pointer;
  ${mobile({fontSize:"12px"})}
  `
function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
 
        </Form>
        <Button>Create </Button>
        <Link>Don't remember your password</Link>
        <Link>Create an account</Link>
      </Wrapper>
    </Container>
  )
}

export default Login