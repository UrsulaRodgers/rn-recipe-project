import React from 'react'
import { Platform } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import { colors } from '../theme'
import MealList from '../components/MealList'

const MealCategoryScreen = props => {
    const catId = props.navigation.getParam('categoryId')
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
    return <MealList navigation={props.navigation} listData={displayedMeals} />    
}

MealCategoryScreen.navigationOptions = navigationProps => {
    const catId = navigationProps.navigation.getParam('categoryId')
    const catColor = navigationProps.navigation.getParam('color')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title,
        headerStyle: Platform.OS === 'android' ? {
            backgroundColor: catColor,
            opacity: 0.8
        }
        : {},
        headerTintColor: Platform.OS === 'android' ? colors.primaryText : catColor
    }
}

export default MealCategoryScreen