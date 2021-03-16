import styled from 'styled-components';

const Picture = styled.img`
    position: relative;
    z-index: 2;
    width: 25px;

`

const Icon = styled.a`
      
    &::before {
    content:"";
    display: inline-block;
    position: relative;
    right: -27px;
    top: -7px;
    z-index: 1;
    height: 20px;
    width: 20px;
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
    }
    
   &:first-of-type::before {
    background-image: url(/blobShapeBuilds.svg);
    
   }
   &:last-of-type::before {
    background-image: url(/blobShapeDoc.svg);
    top: -2px;
   }
`
const Icons = styled.nav`
    display: flex;
`


const GroupButtons = (props) => {
    return <Icons>
        <Icon>
            <Picture src="/heart.svg" alt="Избранное"/>
            {/*<img src="/blobShapeBuilds.svg" alt="Фон"/>*/}
        </Icon>
        <Icon>
            <Picture src="/person.svg" alt="Избранное"/>
            {/*<img src="/blobShapeDoc.svg" alt="Фон"/>*/}
        </Icon>
    </Icons>
}

export default GroupButtons