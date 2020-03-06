import React from 'react'
import { Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from './HeaderButton'

const NavMenuButton = props => {
    return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" color={Platform.OS === "android" ? "white" : "black"} onPress={() => {
                props.navigationProps.navigation.toggleDrawer()
            }} />
        </HeaderButtons>
        )
}

export default NavMenuButton