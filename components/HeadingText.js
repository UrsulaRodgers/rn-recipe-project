import React from 'react'
import { StyleSheet, Text } from 'react-native'

const HeadingText = props => {
    return (
        <Text style={{...styles.text, color: props.color}}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    }
})

export default HeadingText