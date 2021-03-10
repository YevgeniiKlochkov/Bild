import styled from 'styled-components';
import MenuItem from "../menuItem/MenuItem";

const List = styled.nav `

`

const Menu = ({list}) => {
    return <List>
        {
            list.map((menuItem, index) => {
                return <MenuItem
                    key={index}
                    nameItem={menuItem.itemName}
                    href={menuItem.href}
                    title={menuItem.title}
                />
            })
        }
    </List>
}

export default Menu