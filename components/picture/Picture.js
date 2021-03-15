import styled from 'styled-components';

const Picture = styled.img`
    float: right;
`

export default ({src, title}) => {
     return <Picture src={src} title={title}/>
}