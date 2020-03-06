import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableNativeFeedback, View, Text, Platform, ImageBackground } from 'react-native'
import { colors } from '../theme'
import DefaultText from './DefaultText'

const MealItem = props => {

    const renderTextColor = catColor => {
        return catColor ? { color: catColor } : { color: colors.mealItemDefault }
    }

    const renderBorderColor = catColor => {
        return catColor ? { borderColor: catColor } : { borderColor: colors.mealItemDefault }
    }

    let TouchableComponent = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback
    }
    return (
        <View style={styles.mealItem}>
            <TouchableComponent onPress={props.onSelect}>
                <View style={{ ...styles.mealItemContainer, ...renderBorderColor(props.catColor) }}>
                    <View style={{ ...styles.mealRow, ...styles.mealItemHeader }}>
                        <ImageBackground style={styles.mealImage} source={{uri: props.image}}>
                            <Text style={styles.mealTitle} numberOfLines={1}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealInformation }}>
                        <DefaultText style={renderTextColor(props.catColor)}>{props.duration}m</DefaultText>
                        <DefaultText style={renderTextColor(props.catColor)}>{props.complexity}</DefaultText>
                        <DefaultText style={renderTextColor(props.catColor)}>{props.affordability}</DefaultText>
                    </View>
                </View>
            </TouchableComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    mealItemContainer: {
        flex: 1,
        alignItems: 'center',
        width: '90%',
        height: 200,
        marginVertical: 10,
        borderWidth: 5,
        borderRadius: 3,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3
    },
    mealRow: {
        flexDirection: 'row',
        backgroundColor: colors.secondaryBackground
    },
    mealItemHeader: {
        flex: 1,
        width: '100%',
        height: '90%',
        borderRadius: 10
    },
    mealInformation: {
        width: '100%',
        paddingTop: 3,
        justifyContent: 'space-evenly'
    },
    mealImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealTitle: {
        fontFamily: 'open-sans-bold',
        fontSize: Platform.OS === "android" ? 22 : 20,
        color: colors.primaryText,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 1
    }
})

export default MealItem