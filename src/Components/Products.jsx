import styled from 'styled-components';
import { popularProducts } from "../data"
import Product from './Product';
import {mobile} from "../Responsive"


export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding:20px;
  justify-content: flex-start;
  ${mobile({flexDirection:"column",justifyContent:"center",alignItems:"center " })}
`;
function Products() {
    return (
        <Container >
            {popularProducts.map(item =>(
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products