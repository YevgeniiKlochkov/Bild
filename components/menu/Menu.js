import styled from 'styled-components';
import MenuItem from "../menuItem/MenuItem";

const List = styled.nav `

`

const Menu = (menuItems) => {
    for (let key in menuItems) {
        console.log(key+':'+menuItems[key]);
    }

    return <List>
        <MenuItem/>
    </List>
}

export default Menu