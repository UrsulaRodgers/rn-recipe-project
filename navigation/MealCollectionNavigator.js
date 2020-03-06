import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { colors } from '../theme'
import CategoriesScreen from '../screens/CategoriesScreen'
import MealCategoryScreen from '../screens/MealCategoryScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavouritesScreen from '../screens/FavouritesScreen'
import FilteredMealScreen from '../screens/FilteredMealScreen'
import TabBarLabel from '../components/TabBarLabel'

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primaryHeaderBackground : ''
    },
    headerTintColor: Platform.OS === 'android' ? colors.primaryText : colors.secondaryText,
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleVisible: false
}

const MealStackNavigator = createStackNavigator({
    //first key value pair is the default screen - unless an initialRouteName property is created (see below)
    Categories: {
        screen: CategoriesScreen
    },
    MealCategories: {
        screen: MealCategoryScreen
    },
    MealDetails: {
        screen: MealDetailsScreen
    }
},
{   
    // initialRouteName: CategoriesScreen,
    mode: 'modal',
    defaultNavigationOptions: defaultNavOptions
})

const FavouritesStackNavigator = createStackNavigator({
    Favourites: {
        screen: FavouritesScreen
    },
    MealDetails: {
        screen: MealDetailsScreen
    }
},
{   
    mode: 'modal',
    defaultNavigationOptions: defaultNavOptions
})

const tabScreenConfig = {
    Meals: {
        screen: MealStackNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons 
                        name='ios-restaurant' 
                        size={25} 
                        color={tabInfo.tintColor} 
                    />
                )
            },
            tabBarColor: colors.mealsTabColor,
            tabBarLabel: Platform.OS === 'android' ? <TabBarLabel>Meals</TabBarLabel> : 'Meals'
        }
    },
    Favourites: {
        screen: FavouritesStackNavigator,
        navigationOptions: {
            // tabBarLabel: 'Favourites!',
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons 
                        name='ios-star' 
                        size={25} 
                        color={tabInfo.tintColor} 
                    />
                )
            },
            tabBarColor: colors.favTabColor,
            tabBarLabel: Platform.OS === 'android' ? <TabBarLabel>Favourites</TabBarLabel> : 'Favourites'
        }
    }
}

const MealsFavTabNavigator = 
    Platform.OS === "android"  
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeColor: colors.primaryText,
            shifting: true,
            // use barStyle when shifting is false
            // barStyle: {
            //     backgroundColor: 'white'
            // }
        }) 
        : createBottomTabNavigator(tabScreenConfig,  {
            tabBarOptions: {
                activeTintColor: colors.favTabColor,
                labelStyle: {
                    fontFamily: 'open-sans'
                }
            }
        })

const FilterNavigator = createStackNavigator({
    Filters: FilteredMealScreen
})

const MainNavigator = createDrawerNavigator({
    MealsFav: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: {
        screen: FilterNavigator,
        navigationOptions: {
            drawerLabel: 'Filter Options'
        }
    }
}, {
    defaultNavigationOptions: defaultNavOptions,
    contentOptions: {
        activeTintColor: colors.favTabColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})

export default createAppContainer(MainNavigator)