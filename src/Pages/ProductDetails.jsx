import React from 'react'
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import NewsLetter from '../Components/NewsLetter';
import woman from "../assets/woman.jpg"
import { Add, Remove } from '@material-ui/icons';
import {mobile} from "../Responsive"



export const Container = styled.div`
  
`;
export const Wrapper = styled.div`
  padding: 50px;
  display: flex ;;
  ${mobile({flexDirection:"column"})}
`;
export const ImgContainer = styled.div`
  flex:1;
`;
export const Image = styled.img`
  width: 60%;
  height: 90vh;
  object-fit: cover;
  ${mobile({width:"100%"})}
`;
export const InfoContainer = styled.div`
  flex:1;
  padding: 0px 50px;
  ${mobile({padding:"0"})}
`;
export const Title = styled.h1`
  font-weight: 200;
  
`;
export const Description = styled.div`
  margin: 20px 0px;
  ${mobile({display:"none"})}
`;
export const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 30px 0;
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin:0px 5px;
  cursor: pointer;
`;
export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
export const FilterSizeOption = styled.option`
  
`;
export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
export const Amount = styled.span`
  width: 30px;
  height:30px;
  border-radius: 10px;
  border:2px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px
`;
export const Button = styled.button`
  padding: 15px;
  border:2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  ${mobile({width:"180px"})}
  &:hover{
    background: #f8f4f4;
  }
`;

function ProductDetails() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={woman} />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised i
          </Description>
          <Price>20$</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"/>
              <FilterColor color="darkblue"/>
              <FilterColor color="gray"/>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>ADD TO CARt</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default ProductDetails