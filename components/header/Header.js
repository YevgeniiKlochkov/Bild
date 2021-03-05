import styled from 'styled-components';
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import Search from "../search/Search";

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: #111;
  }
  padding-top:20px;
  padding-bottom:20px;
`


const Header = (props) => {
    return <Container>
        <Logo></Logo>
        <Search></Search>
        <Menu></Menu>
    </Container>
}

export default Header