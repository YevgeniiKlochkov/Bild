import styled from 'styled-components';

const Container = styled.div`
  
`


const GroupButtons = (props) => {
    return <Container>
        <img src="/heart.svg" alt="Избранное"/>
        <img src="/person.svg" alt="Избранное"/>
    </Container>
}

export default GroupButtons