import styled from 'styled-components';

const Container = styled.div`
  background: rgba(254,236,0,.8);
  padding: 3rem;
  margin: 40 0;
`

const Inner = styled.div`
  max-width; 1250px;
`

const Col2 = styled.div`
    display: inline-block;
    width: 50%;
    height: 500px;
    background: gray;
    &:last-of-type {
        background: green;
    }
`


const SectionSearch = (props) => {
    return <Container>
        <Inner>
            <Col2/>
            <Col2/>
        </Inner>

    </Container>
}

export default SectionSearch