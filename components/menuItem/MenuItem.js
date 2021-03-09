import styled from 'styled-components';

const Item = styled.a`
    @import "./components/font.css";
    font-family: "logoBild", sans-serif;
    
    font-size: 1rem;
    padding-left: 1rem;
    &:hover{
        text-decoration: underline;
    }
  
`

const MenuItem = ({nameItem, href, title}) => {
    return <Item href={href} title={title}>{nameItem}</Item>
}


export default MenuItem