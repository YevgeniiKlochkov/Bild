import stiled from 'styled-components';

const Box = stiled.div`
    height:100%;
    background: url(/blobShape_rl.svg) no-repeat 100%,
            url(/blobShape_rb.svg) no-repeat bottom 10px right -30px;


    /*&:last-child {
        position: relative;
    }
    [class^="Picture"] {
        position: absolute;
    }
    [class^="Picture"]:first-child {
        top: 0;
        left: 0;
        z-index: 2;
    }
    [class^="Picture"]:last-child {
        top: 150px;
        right: -40px;
        z-index: 1;
    }
*/
`

const Background = ({children}) => {
    return <Box>
        {children}
    </Box>
}

export default Background;