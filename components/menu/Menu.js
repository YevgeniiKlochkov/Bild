import styled from 'styled-components';

const Container = styled.div`
  a{
    font-size: 1rem;
    padding-left: 1rem;
  }
  a:hover{
    text-decoration: underline;
  }
  @import "./components/font.css";
  font-family: "logoBild", sans-serif;
`


const Menu = (props) => {
    return <Container>
        <nav>
            <a href="#" title="Акции">Акции</a>
            <a href="#" title="Новостройки">Новостройки</a>
            <a href="#" title="На карте">На карте</a>
            <a href="#" title="Коттетжи">Коттетжи</a>
            <a href="#" title="Комерческая">Комерческая</a>
            <a href="#" title="Комерческая">Комерческая</a>
            <a href="#" title="Застройщики">Застройщики</a>
        </nav>
    </Container>
}

export default Menu