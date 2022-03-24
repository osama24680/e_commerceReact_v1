import React from 'react'
import styled from 'styled-components';
import model from "../assets/register.jpg"
import {mobile} from "../Responsive.js"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)), url(${model});
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
  ${mobile({width:"90%"})}
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  ${mobile({flexDirection:"column"})}
`;
export const Input = styled.input`
  flex:1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding:10px;
  border: 1px solid gray;
`;
export const Agreement = styled.div`
  font-size: 12px;
  margin: 20px 0;
  /* display: block; */
`;
export const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  background-color: teal;
  color:#fff;
  cursor:pointer;
  
`;

function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="Confirm password" />
        </Form>
        <Agreement>By creating an account, yu approve about all licences </Agreement>
        <Button>Create </Button>

      </Wrapper>
    </Container>
  )
}

export default Register