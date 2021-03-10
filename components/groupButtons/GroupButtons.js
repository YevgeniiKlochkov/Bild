import styled from 'styled-components';

const Icon = styled.a`
    img {
    position: relative;
    z-index: 2;
    }
    
    &:before {
    content:"";
    display: inline-block;
    position: relative;
    right: -20px;
    z-index: 1;
    }
   &:first-of-type:before {
    content: url(/blobShapeBuilds.svg);
   }
   &:last-of-type:before {
    content: url(/blobShapeDoc.svg);
   }
`
const Icons = styled.nav`
    weight: 100px;
`

const GroupButtons = (props) => {
    return <Icons>
        <Icon>
            <img src="/heart.svg" alt="Избранное"/>
            {/*<img src="/blobShapeBuilds.svg" alt="Фон"/>*/}
        </Icon>
        <Icon>
            <img src="/person.svg" alt="Избранное"/>
            {/*<img src="/blobShapeDoc.svg" alt="Фон"/>*/}
        </Icon>
    </Icons>
}

export default GroupButtons