import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NavMenuButton from '../components/NavMenuButton'

const FilteredMealScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Filtered Meals Screen</Text>
        </View>
    )
}

FilteredMealScreen.navigationOptions = navigationProps => {
    return {
        headerTitle: 'Filter Options',
        headerLeft: <NavMenuButton navigationProps={navigationProps} />
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FilteredMealScreen