import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import { Button } from 'react-native-elements'
import { Link } from 'expo-router'

const Task = ({text, index, completeTask}) => {
  return (
    <View style={styles.taskContainer}>
    <View style={styles.items}>
        {/* <View style={styles.itemsLeft}> */}
           
        <Text style={styles.itemText} >{text}</Text>
    </View>
    {/* </View> */}
    <Link 
    href={{
        pathname: "/todo/[id]",
        params: { id: '{index}' },
    }}
     >
    {/* <Button style={styles.button}
    title="Edit" /> */}
    <Pressable style={styles.button}>
    <Text style={styles.buttonText}>Edit</Text>
    </Pressable>
    </Link>

   
    <Pressable style={styles.button} onPress={() => completeTask(index)}>
    <Text style={styles.buttonText}>Delete</Text>
    </Pressable>
  
   
    </View>
  )
}

export default Task
const styles = StyleSheet.create({
    taskContainer: {
      flexDirection: "row",
        justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 1, // Add this line
    },
    items: {
      flexShrink: 1, // Add this line
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      width: '50%',
    },
    itemsLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'nowrap',
    },
    itemText: {
      flexShrink: 1, // Add this line
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '8%',
    },
  })
  