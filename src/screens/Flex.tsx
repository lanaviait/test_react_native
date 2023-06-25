import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Flex = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>caja 1</Text>
            <Text style={styles.caja2}>caja 2</Text>
            <Text style={styles.caja3}>caja 3</Text>
            <Text style={styles.caja3}>caja 4</Text>
            <Text style={styles.caja3}>caja 5</Text>
            <Text style={styles.caja3}>caja 6</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //se extiende a todo su espacio, sino, usar heiht
        //height: 400,
        //width: 100,
        backgroundColor: '#FF99CC',
        //flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    caja1: {
        // flex: 5,
        height: 100,
        borderWidth: 5,
        borderColor: 'blue'
    },
    caja2: {
        //flex: 3,
        borderWidth: 5,
        borderColor: 'green',
        alignSelf: 'stretch'
    },
    caja3: {
        //flex: 2,
        borderWidth: 9,
        borderColor: 'white'
    },

});