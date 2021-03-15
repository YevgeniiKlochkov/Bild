import styled from 'styled-components';

const HeadSectionSearch = styled.h1`
    font-size: 4rem;
`


export default ({text}) => {
    return <HeadSectionSearch>
        {text}
    </HeadSectionSearch>
}