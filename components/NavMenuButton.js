import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from './HeaderButton'

const NavMenuButton = props => {
    return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                props.navigationProps.navigation.toggleDrawer()
            }} />
        </HeaderButtons>
        )
}

export default NavMenuButton