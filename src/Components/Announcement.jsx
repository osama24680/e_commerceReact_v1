import styled from 'styled-components';
const Container =styled.div`
    background-color:teal;
    color:white;
    text-align:center;
    padding:10px 0;
    font-size:16px;
    font-weight:500;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement