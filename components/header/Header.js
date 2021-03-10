import styled from 'styled-components';
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import Search from "../search/Search";
import GroupButtons from "../groupButtons/GroupButtons";




const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: #111;
  }
  padding-top:20px;
  padding-bottom:20px;
`
let list = [
    {
        itemName: 'Акции',
        href: '#',
        title: 'Акции'
    },
    {
        itemName: 'Новостройки',
        href: '#',
        title: 'Новостройки'
    },
    {
        itemName: 'На карте',
        href: '#',
        title: 'На карте'
    },
    {
        itemName: 'Котетжи',
        href: '#',
        title: 'Котетжи'
    },
    {
        itemName: 'Комерческая',
        href: '#',
        title: 'Комерческая'
    },
    {
        itemName: 'Застройщики',
        href: '#',
        title: 'Застройщики'
    }
];

const Header = (props) => {
    return <Container>
        <Logo href="/" title="Bild.ua" logo="/logo.png" />
        <Search />
        <Menu list={list}/>
        <GroupButtons/>
    </Container>
}

export default Header