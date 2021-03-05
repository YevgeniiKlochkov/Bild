import styled from 'styled-components';

const Container = styled.div`
  .logo{
    text-transform: uppercase; 
    font-size: 2rem;
    
  }
  
  .logo * {
    vertical-align: middle;
    display: inline-block;
  }
  
  .logo:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
}
  
  @import "/fonts/font.css";
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  font-family: "Roboto", "logoBild", sans-serif;
  font-weight: 700;
  
  .logo-text, .logo-img {
    display: inline;
    vertical-align: middle;
  }
  
  .logo--img {
    margin-right:20px;
    height: 100%
  }
  .
`


const Logo = (props) => {
    return <Container>

        <a href="#" className="logo" title="Bild.ua">
            <img src="/logo.png" className="logo--img" alt="Logo"/>
            <span className="logo--text">Bild.ua</span>
        </a>
    </Container>
}

export default Logo