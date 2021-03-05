import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
  html, body {
    margin:0;
    padding:0;
  }
`

const Layout = (props) => {
    return <Container>
        {props.children}
    </Container>
}

export default Layout