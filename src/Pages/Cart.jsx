import React from 'react'
import Navbar from "../Components/Navbar"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import styled from 'styled-components';
import shoes from "../assets/shoes.jpg";
import jacket2 from "../assets/jacket2.png";
import { Add, Remove } from '@material-ui/icons';
import {mobile} from "../Responsive"

export const Container = styled.div`
  
`;
export const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding:"10px"})}
`;
export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  ${mobile({padding:"5px",fontSize:"12px"})}
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  border:${props => props.type === "filled" ? "none" : "2px solid black"};
  background-color:${props => props.type === "filled" ? "black" : "transparent"};
  color:${props => props.type === "filled" && "white"};
`;
export const TopTexts = styled.div`
   ${mobile({display:"none"})}
`;
export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  ${mobile({display:"flex",flexDirection:"column",fontSize:"12px"})}
`;
export const Bottom = styled.div`
  display: flex ;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})}
`;
export const Info = styled.div`
  flex:3;
`;

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}

`;
export const ProductDetail = styled.div`
    flex:2;
    display: flex;

`;
export const Image = styled.img`
    width: 200px;
    ${mobile({width:"120px"})}

`;
export const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const ProductName = styled.span`

`;
export const ProductId = styled.span`

`;
export const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color:${props => props.color};
`;
export const ProductSize = styled.span`

`;


export const PriceDetail = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin:"5px 15px"})}

`;
export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom:"20px"})}
`;
export const Hr = styled.div`
    background-color: #eee;
    border: none;
    height: 1px;
`;


export const Summary = styled.div`
  flex:1;
  border:.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
export const SummaryTitle = styled.h1`
  font-weight: 200;
`;
export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type ==="total" && "500"};
  font-size: ${props=>props.type ==="total" && "24px"};
`;
export const SummaryItemText = styled.span`
  
`;
export const SummaryItemPrice = styled.div`
  
`;
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color:white;
`;

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>Your BAG</Title>
                <Top>
                    <TopButton>Continue shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bage(2)</TopText>
                        <TopText>Your wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout now</TopButton>
                </Top>
                <Hr/>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src={shoes} />
                                <Details>
                                    <ProductName><b>Product:</b>JESSIE THUNDE SHOES</ProductName>
                                    <ProductId><b>ID:</b>19102902</ProductId>
                                    <ProductColor color="red" />
                                    <ProductSize><b>Size:</b>38</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>30$</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src={jacket2} />
                                <Details>
                                    <ProductName><b>Product:</b>JESSIE THUNDE SHOES</ProductName>
                                    <ProductId><b>ID:</b>19102902</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size:</b>38</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>90$</ProductPrice>
                            </PriceDetail>
                        </Product>

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>80$</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>5.90$</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-5.90$</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>80$</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />

        </Container>
    )
}

export default Cart