import styled from 'styled-components';

const Container = styled.div`
  .fieldSearch {
    width: 250px;
    height: 40px;
    border: .1rem solid hsla(0,0%,60.8%,.5);
    border-radius: 3px;   
  }
  
  .fieldSearch--button {
    padding:0;
    margin:0;
    border: none;
    background: none;
    position: relative;
    left: -32px;
    top: 6px;
    
  }
  
  
`


const Search = (props) => {
    return <Container>
        <form>
            <input name="search" className="fieldSearch" placeholder="Название ЖК или Застройщ..." type="search"/>
                <button type="submit" className="fieldSearch--button">
                    <img src="/icon-search.svg" alt="search"/>
                </button>
        </form>
    </Container>
}

export default Search