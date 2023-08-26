import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Navigator from './routes/homeStack';

export default function App() {
  const [person, setPerson] = useState({
    name: 'Paolo',
    age: 35
  })

  return (
    <View style={styles.container}>
      {/* <Navigator /> */}
      <Text>Hello World!</Text>
      <Text>Enter Name:</Text>
      <TextInput 
        style={styles.input}
        placeholder='Paolo Doe'
        onChangeText={(value) => setPerson({...person, name: value})}/>
      <Text>Enter Age:</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder='Eg. 69'
        onChangeText={(value) => setPerson({...person, age: parseInt(value)})}/>
      <Text>My Name is {person.name} and my age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Click me!" 
        color="#fff"
        onPress={() => 
          setPerson({...person, name: 'John Doe', age: 40})}/>
      </View>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#000',
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
