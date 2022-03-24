import { Facebook, Pinterest, Instagram, Twitter, Room, Phone, MailOutline } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import methods from "../assets/all.png"
import {mobile} from "../Responsive"


export const Container = styled.div`
  display: flex ;
  justify-content: space-between;
  padding:  25px;
  margin-top: 50px;
  ${mobile({flexDirection:"column"})}

`;

export const Left = styled.div`
  width: 30%;
  display:flex;
  flex-direction: column;
  ${mobile({width:"100%"})}
`;
export const Logo = styled.h1`
  margin-bottom: 20px;
  ${mobile({marginBottom:"0px"})}

`;
export const Description = styled.p`
  margin: 20px 0px;
`;
export const SocialContainer = styled.div`
   display: flex;
   margin-left: -15px;
   margin-top: 20px;
`;
export const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color:#${props => props.color};
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;

`;


export const Center = styled.div`
  width: 30%;
  ${mobile({display:"none"})}

`;
export const Title = styled.h3`
  margin-bottom: 30px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  display:flex;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  width: 40%;
  margin-bottom: 10px;
`;






export const Right = styled.div`
 width: 30%;
 ${mobile({marginTop:"40px",width:"100%"})}

`;
export const ContactItem = styled.div`
  margin-bottom: 15px;
  display:flex;
  align-items: center;
`;
export const Payment = styled.img`
  width: 50%;
  
`;



const Footer = () => {
    return (
        <Container>
            <Left >
                <Logo>LAMA.</Logo>
                <Description>
                    Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                    standard dummy text ever since the
                    1500s, when an unknown printer took
                    a galleyof type and scrambled it to make a
                    type specimen book. It has
                </Description>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <Facebook />
                    </SocialIcon >
                    <SocialIcon color="e440f5">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="e60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center >
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right >
                <Title>Contact</Title>
                <ContactItem>
                    <Room  style={{marginRight:"10px"}}/>Alexandria, Egypt
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +201127796848
                </ContactItem>
                <ContactItem>
                   <MailOutline style={{marginRight:"10px"}}/> Contact@lama.com
                </ContactItem>
                <Payment src={methods} />
            </Right>
        </Container>
    )
}

export default Footer