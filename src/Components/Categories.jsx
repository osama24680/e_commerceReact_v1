import styled from 'styled-components';
import { categories } from "../data"
import CategoryItem from "./CategoryItem"
import {mobile} from "../Responsive"
const Container = styled.div`
     display:flex;
    padding:20px;
    justify-content:space-between;
    ${mobile({ padding: "0px",marginTop:"40px", flexDirection: "column" })}
`
const Categories = () => {
    return (
        <div>
            <Container>
                {categories.map(item => (
                    <CategoryItem item={item} key={item.id} />
                ))}
            </Container>
        </div>
    )
}

export default Categories