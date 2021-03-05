import styled from 'styled-components';

const Container = styled.div`
  
`


const Search = (props) => {
    return <Container>
        <form>
            <input name="s" placeholder="Название ЖК или Застройщ..." type="search"/>
                <button type="submit">Поиск</button>
        </form>
    </Container>
}

export default Search