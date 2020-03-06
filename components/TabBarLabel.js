import React from 'react'
import { Text, StyleSheet } from 'react-native'

const TabBarLabel = props => {
    return (
        <Text style={styles.label}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'open-sans-bold'
    }
})

export default TabBarLabel