import styled from 'styled-components';

const Container = styled.div`
  a{text-transform: uppercase; 
  font-size: 3.36rem;}
  @import "/fonts/font.css";
  font-family: "logoBild", sans-serif;
`


const Logo = (props) => {
    return <Container>

        <a href="#" title="Bild.ua">
            <img src="/logo.png" alt="Logo"/>
            Bild.ua
        </a>
    </Container>
}

export default Logo