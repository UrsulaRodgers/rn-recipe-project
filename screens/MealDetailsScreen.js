import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Platform } from 'react-native'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { colors } from '../theme'
import CustomHeaderButton from '../components/HeaderButton'
import Card from '../components/Card'
import DefaultText from '../components/DefaultText'
import HeadingText from '../components/HeadingText'

const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.mealRow}>
                <DefaultText style={styles.mealRowText}>{selectedMeal.duration}m</DefaultText>
                <DefaultText style={styles.mealRowText}>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText style={styles.mealRowText}>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <View style={styles.recipeView}>
                <Card style={styles.recipeCard}>
                    <View style={styles.ingredients}>
                        <HeadingText>INGREDIENTS</HeadingText>
                        {selectedMeal.ingredients.map((ingredient, index) => (
                            <Text 
                                style={styles.listText} 
                                key={index}>
                                {ingredient}
                            </Text>
                        ))}
                    </View>
                    <View style={styles.steps}>
                        <HeadingText>INSTRUCTIONS</HeadingText>
                        {selectedMeal.steps.map((step, index) => (
                            <Text style={styles.stepText} key={index}>
                                {`\u2022 ${step}`}
                            </Text>
                        ))}
                    </View>
                </Card>
            </View>
        </ScrollView>
    )
}

MealDetailsScreen.navigationOptions = navigationProps => {
    const mealId = navigationProps.navigation.getParam('mealId')
    const catColor = navigationProps.navigation.getParam('color')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    const iOSTintColor = catColor ? catColor : colors.mealItemDefault

    return {
        headerTitle: selectedMeal.title,
        headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
                title='Favourite'
                iconName='ios-star'
                color={Platform.OS === "android" ? "white" : "black"}
                onPress={() => {
                    console.log('Fav')
                }}
            />
        </HeaderButtons>,
        headerStyle: Platform.OS === 'android' ? {
            backgroundColor: catColor ? catColor : colors.mealItemDefault,
            opacity: 0.8
        }
        : {},
        headerTintColor: Platform.OS === 'android' ? colors.primaryText : iOSTintColor
    }
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.primaryBackground
    },
    image: {
        width: '100%',
        height: 200
    },
    mealRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: colors.secondaryBackground
    },
    mealRowText: {
        color: colors.primaryText
    },
    recipeView: {
        alignItems: 'center',
        marginVertical: 20
    },
    recipeCard: {
        width: '90%',
        justifyContent: 'center',
        padding: 10
    },
    ingredients: {
        alignItems: 'center'
    },
    steps: {
        marginVertical: 15,
        marginHorizontal: 30
    },
    heading: {
        marginBottom: 5
    },
    stepText: {
        fontFamily: 'open-sans',
        fontSize: 16,
        marginLeft: 3
    },
    icon: {
        marginRight: 10
    }
})

export default MealDetailsScreen