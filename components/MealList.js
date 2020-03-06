import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const MealList = props => {

    const renderMealItem = itemData => {
        const catColor = props.navigation.getParam('color')
       
        return (
            <MealItem 
                title={itemData.item.title} 
                image={itemData.item.imageUrl}
                affordability={itemData.item.affordability.toUpperCase()} 
                complexity={itemData.item.complexity.toUpperCase()}
                duration={itemData.item.duration}
                catColor={catColor} 
                onSelect={() => {
                props.navigation.navigate({ routeName: 'MealDetails', params: {
                    mealId: itemData.item.id, color: catColor
                }})
            }} />
        )
    }
    
    return (
        <View style={styles.screen}>
            <FlatList 
                keyExtractor={(item, index) => item.id}
                data={props.listData} 
                renderItem={renderMealItem}
                style={{width: '100%'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealList