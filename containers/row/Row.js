import styled from 'styled-components';

const Box = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
`

const Row = ({children}) => {
    return <Box>{children}</Box>
}

export default Row