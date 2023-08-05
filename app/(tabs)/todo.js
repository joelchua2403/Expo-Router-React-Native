import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Keyboard } from 'react-native'
import Task from '../../components/Task'


const todo = () => {
    const [task, setTask] = useState()
    const [taskItems, setTaskItems] = useState([])

    const handleAddTask = () => {
        Keyboard.dismiss()
        setTaskItems([...taskItems, task])
        setTask(null)
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems]
        itemsCopy.splice(index, 1)
        setTaskItems(itemsCopy)
    }




  return (
   <View style={styles.container}>
    <Text style={styles.sectionTitle}>Todo List</Text>
    <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
    >
          <View style={styles.items}>
            
            {taskItems && taskItems.map((item, index) => {
                return (
                    <TouchableOpacity key={index} 
                    onPress={() => completeTask(index)}
                    >
                        <Task text={item} />
                    </TouchableOpacity>
                )
            }
            )}
            </View>
            </ScrollView>
            <View style={styles.writeTaskWrapper}>
        
            <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        
            <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
                    </TouchableOpacity>
                    </View>

      
                
      
       
    </View>
 
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        padding: 40,
        paddingTop: 80,
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,

        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {
        fontSize: 30,
        color: '#C0C0C0',

    },


})

export default todo
