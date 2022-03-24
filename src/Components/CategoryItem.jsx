import styled from 'styled-components';
import {mobile} from "../Responsive"



const Container =styled.div`
  flex:1;
  margin:3px;
  height:70vh;
  position:relative; 
  ${mobile({marginTop:"20px" })}

`
const Image =styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
`
const Info =styled.div`
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;

`
const Title =styled.h1`
  color:#fff;
  margin-bottom:20px;
  font-weight:600;

`
const Button =styled.button`
  border:none;
  padding:10px;
  background-color:#fff;
  color:gray;
  cursor:pointer;

`
const CategoryItem = ({item}) => {
  return (
    <div>
        <Container>
            <Image src={item.img} />
            <Info>
              <Title>{item.title}</Title>
              <Button>Shop now</Button>
            </Info>
        </Container>
    </div>
  )
}

export default CategoryItem