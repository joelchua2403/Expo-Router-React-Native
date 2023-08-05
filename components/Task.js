import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Task = ({text}) => {
  return (
    <View style={styles.items}>
        <View style={styles.itemsLeft}>
           
        <Text style={styles.itemText} >{text}</Text>
        
    </View>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
    items: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemsLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: "100%",
    },
    itemText: {
        maxWidth: '80%',
    }
})