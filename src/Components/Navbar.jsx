import React from 'react'
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from "@material-ui/core"
import { mobile } from "../Responsive"


const Container = styled.div`
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
${mobile({ padding: "10px 0px",marginRight:"20px" })}
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Language = styled.div`
font-size:14px;
cursor:pointer;
${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
border:.5px solid lightgray;
display:flex;
align-items:center;
padding:5px;
margin-left:15px
`
const Input = styled.input`
border:none;
${mobile({ width: "50px" })}
`


const Center = styled.div`
flex:1;
text-align:Center;
`
const Logo = styled.h1`
font-weight:bold;
${mobile({ fontSize: "24px" })}
`



const Right = styled.div`
flex:1;
text-align:Center;
display:flex;
justify-content:flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-right:20px;
${mobile({ fontSize: "12px", marginRight: "5px" })}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input placeholder="search..." />
                        <Search style={{ color: "gray", fontSixe: 16 }} />
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo >LAMA.</Logo>
                </Center>

                <Right>
                    <MenuItem>REGISTOR</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </Right>
            </Wrapper>

        </Container>
    )
}

export default Navbar