import {  Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components';
import {mobile} from "../Responsive"


export const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column
`;
export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({fontSize:"40px"})}

`;
export const Description = styled.div`
  font-size:24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({fontSize:"18px",textAlign:"center"})}
`;
export const InputContainer = styled.div`
  width: 30%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border:1px solid lightgray;
  ${mobile({margin:"auto",width:"70%"})}
`;
export const Input = styled.input`
  border: none;
  flex: 8;
  padding: 10px;
  
`;
export const Button = styled.button`
  flex:1;
  padding-left: 20px;
  background-color: teal;
  color:white !important;
  
`;


const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favourit products</Description>
        <InputContainer>
            <Input placeholder="your email"/>
            <Button>
                <Send style={{fill:"white"}}/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter