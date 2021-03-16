import stiled from 'styled-components';

const Box = stiled.p`
    grid-column: 3;
    padding-left: 70px;
    align-self: end;
    justify-self: start;
    line-height: 1.5;
    margin-bottom: 0;
`
const Text = (props) => {
    return <Box>
        {props.children}
    </Box>
}

export default Text;