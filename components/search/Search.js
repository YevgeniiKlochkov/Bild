import styled from 'styled-components';

const Container = styled.div`
  .fieldSearch {
    width: 250px;
    height: 40px;
    border: 1px #111 solid;
    border-radius: 3px;   
  }
  
  .fieldSearch--button {
    padding:0;
    margin:0;
    border: none;
    background: none;
    position: relative;
    left:-20px;
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