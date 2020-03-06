import React from 'react'
import { MEALS } from '../data/dummy-data'
import NavMenuButton from '../components/NavMenuButton'
import MealList from '../components/MealList'

const FavouritesScreen = props => {
    const favouriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
        <MealList 
            navigation={props.navigation}
            listData={favouriteMeals} 
        />
    )
}

FavouritesScreen.navigationOptions = navigationProps => {
   return {
    headerTitle: 'Your Favourites',
    headerLeft: <NavMenuButton navigationProps={navigationProps} />
    }
}

export default FavouritesScreen