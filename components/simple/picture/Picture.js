import styled from 'styled-components';

const Box = styled.img`
     &.top-left{
          align-self: start;
          justify-self: end;
     }
`

const  Picture = ({src, title, className}) => {
     return <Box src={src} title={title} className={className}/>
}

export default Picture;