import styled from "styled-components";

const Box = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  &.twoColumns {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
const Inner = ({children, className}) => {
    return <Box className={className}>
        {children}
    </Box>
}

export default Inner;
