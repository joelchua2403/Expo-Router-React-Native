import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';
import { RadioButton} from 'react-native-paper';

const FormPage = () => {
  const { name, setName, email, setEmail, message, setMessage, isRecruiter, setIsRecruiter } = useContext(FormContext);

  return (
    <View style={styles.container}>
      
      <Text style={styles.headerText}>
        Name:
      </Text>
       
      <Input
        placeholder="Enter name"
        onChangeText={(name) => setName(name)}
        value={name}
      />
      <Text style={styles.headerText}>
        Email:
      </Text>
      <Input
        placeholder="Enter email"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
        <Text style={styles.headerText}>
        Message:
        </Text>
      <Input
        placeholder="Enter message"
        onChangeText={(message) => setMessage(message)}
        value={message}
      />
        <Text style={styles.headerText}>
        Are you a recruiter or a job seeker?
        </Text>
      <View style={styles.radioButtonContainer}>
        <RadioButton.Group
          onValueChange={(isRecruiter) => setIsRecruiter(isRecruiter)}
          value={isRecruiter}
        >
          <View style={styles.radioButton}>
            <RadioButton value={true} />
            <Text>Recruiter</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value={false} />
            <Text>Job Seeker</Text>
          </View>
        </RadioButton.Group>
      </View>
      <Button 
        title="Submit"
        onPress={() => {
            alert('Form submitted! Your name is ' + name + ', your email is ' + email + ', your message is ' + message + ', and you are a ' + (isRecruiter ? 'recruiter' : 'job seeker') + '.');
        }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default FormPage;
