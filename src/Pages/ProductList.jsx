import React from 'react'
import styled from 'styled-components';
import Navbar from "../Components/Navbar"
import Announcement from "../Components/Announcement"
import NewsLetter from '../Components/NewsLetter';
import Footer from '../Components/Footer';
import Products from '../Components/Products';
import {mobile} from "../Responsive"

export const Container = styled.div`
  /* ${mobile({backgroundColor:"red"})} */
`;
export const Title = styled.h1`
  padding:0 0 20px 20px;
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

`;
export const Filter = styled.div`
    padding-left:${props => props.padding === "left" && "25px"};
    padding-right:${props => props.padding === "right" && "50px"};
    display: flex;
    align-items: center
    `;
const FilterText = styled.div`
    font-size:20px;
    font-weight: 600;
    margin-right: 20px;
  `
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    background-color: #8080802b;
   
  `
const Option = styled.option`
padding: 10px;
  `
const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>
                Dresses
            </Title>
            <FilterContainer >
                <Filter padding="left">
                    <FilterText>Filter Product</FilterText>
                    <Select>
                        <Option disapled selected>Color</Option>
                        <Option >White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>WhiteGreen </Option>
                    </Select>
                    <Select>
                        <Option disapled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>Xl</Option>
                    </Select>
                </Filter>

                <Filter padding="right">
                    <FilterText>Sort Product</FilterText>
                    <Select >
                        <Option selected>Newset</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (dasc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList