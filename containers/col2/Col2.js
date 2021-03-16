import stiled from "styled-components";

const Box = stiled.div`
    
`
const Col2 = (props) => {
    return <Box>
        {props.children}
    </Box>
}

export default Col2;