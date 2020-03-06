import React from 'react'
import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import GridItem from '../components/GridItem'
import NavMenuButton from '../components/NavMenuButton'

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <GridItem title={itemData.item.title} color={itemData.item.color} onSelect={() => {
                props.navigation.navigate({ routeName: 'MealCategories', params: {
                        categoryId: itemData.item.id, color: itemData.item.color
                }})
            }} />
        )
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id} 
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />
    )
}

CategoriesScreen.navigationOptions = navigationProps => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: <NavMenuButton navigationProps={navigationProps} />
    }
}

export default CategoriesScreen