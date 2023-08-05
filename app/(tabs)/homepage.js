import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Input } from 'react-native-elements';
import { NotesContext } from '../../context/NotesContext';



function HomeScreen({ navigation }) {
    const { notes, setNotes, text, setText } = useContext(NotesContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>
      <Text style={{ fontSize: 30 }}>Write a new note</Text>
      <Input
        placeholder="Enter note"
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <Button
        title="Add note"
        onPress={() => {
          setNotes([...notes, text]);
          setText('');
        }}
      />

      <Text style={styles.title}>Notes</Text>
      {notes.map((note, index) => (
        <Text style={styles.note} key={index}>
          {index + 1}. {note}
        </Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    paddingTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
  },
  note: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default HomeScreen;