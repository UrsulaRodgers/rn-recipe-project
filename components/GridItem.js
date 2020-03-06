import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableNativeFeedback, View, Text, Platform } from 'react-native'

const GridItem = props => {
    let TouchableComponent = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback
    }
    return (
        <View style={styles.gridItem}>
            <TouchableComponent onPress={props.onSelect}>
                <View style={{ ...styles.touchableContent, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.categoryTitle} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        overflow: 'hidden'
    },
    touchableContent: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        margin: 15,
        height: 150
    },
    categoryTitle: {
        fontFamily: 'open-sans-bold',
        fontSize: Platform.OS === "android" ? 22 : 20,
        textAlign: 'right'
    }
})

export default GridItem