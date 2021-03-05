import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  
`

const Layout = (props) => {
    return <Container>
        {props.children}
    </Container>
}

export default Layout