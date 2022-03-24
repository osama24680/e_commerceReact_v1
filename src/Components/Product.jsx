import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import {mobile }from "../Responsive.js"

export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  background-color: rgba(0,0,0,.2);
  z-index:300;
  display:flex;
  align-items: center;
  justify-content: center;
  opacity:0;
`;

export const Container = styled.div`
  margin:5px;
  width:23%;
  height:350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#f5fbfd;
  position: relative;
  ${mobile({margin:0,width:"100%"})}
  &:hover ${Info}{
    opacity:1;
    cursor:pointer
  }
`;
export const Circle = styled.div`
 width: 200px;
 height: 200px;
 border-radius: 50%;
 background-color: #fff;
 position: absolute;
`
export const Image = styled.img`
 height:75%;
 z-index: 2;
`;


export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;;
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const Product = ({ item }) => {
  return (
    <Container >
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product