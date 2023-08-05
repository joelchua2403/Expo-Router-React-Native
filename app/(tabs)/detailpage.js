
import React from 'react';
import { View, Text, Image } from 'react-native';
import { useContext } from 'react';
import { NotesContext } from '../../context/NotesContext';
import { Link } from 'expo-router';

function DetailsScreen() {
  const { notes, text } = useContext(NotesContext);

  return (
    
    <View style={{  alignItems: 'center', justifyContent: 'center' }}>
<Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 100 }}>Your Notes</Text>
      <Image style={{width: 200, height: 200, marginBottom: 100}} 
 source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR6zztPDuEQYutYoV5Dew9q5WdJJ9bAbJygOS2s06arA&s" }} /> 
        {notes.map((note, index) => (
        <Text style={{fontSize: 18, marginTop: 10}} key={index}>
            {index + 1}. {note}
        </Text> 
        ))}
       


    </View>

  );
}

export default DetailsScreen;
