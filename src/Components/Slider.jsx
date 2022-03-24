import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from 'react';
import { sliderItems } from "../data.js"
import { mobile } from "../Responsive"
// import { tablet } from "../Responsive"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  ${mobile({ display:"none" })}
`

const Arrow = styled.div`
width:50px;
height:50px;
background:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:50%;
transform:translateY(-50%);
bottom:0;
/* margin:auto; */
left:${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
cursor:pointer;
opacity:.5;
z-index:2;
`
const Wrapper = styled.div`
    height: 100%;
    display:flex;
    transform:translateX(${props => props.slideIndex * (-100)}vw); 
`
const Slide = styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
background-color:#${props => props.bg}
`
const ImgContainer = styled.div`
    flex:1;
    height: 100%;
`
const Image = styled.img`
    flex:1;
    height: 80%;
`
const InfoContainer = styled.div`
flex:1;
padding:50px;
`
const Title = styled.h1`
    font-size:70px;
    text-transform:uppercase;
`
const Description = styled.p`
    text-transform:uppercase;
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px
`
const Button = styled.button`
    text-transform:uppercase;
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
    border:2px solid black
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide key={item.id} bg={item.bg}>
                        <ImgContainer >
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title >{item.title}</Title>
                            <Description>{item.description}</Description>
                            <Button >show now</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider