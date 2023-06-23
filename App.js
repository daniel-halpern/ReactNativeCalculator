import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={styles.button}
      onPress={() => console.log(props.funct)}>
      <Text style={styles.buttonText}>{props.name}</Text>

  </TouchableOpacity>
  )
}

export default function App() {
  const handleButtonPress = (buttonText) => {
    console.log(`Pressed ${buttonText}`);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.answer}>100</Text>
      <View style={styles.buttonContainer}>
        <Button name="C" funct="Clear"/>
        <Button name="+/-" funct="Negate"/>
        <Button name="%" funct="Percent"/>
        <Button name="÷" funct="Divide"/>
        <Button name="7" funct="Seven"/>
        <Button name="8" funct="Eight"/>
        <Button name="9" funct="Nine"/>
        <Button name="X" funct="Multiply"/>
        <Button name="4" funct="Four"/>
        <Button name="5" funct="Five"/>
        <Button name="6" funct="Six"/>
        <Button name="-" funct="Subtract"/>
        <Button name="1" funct="One"/>
        <Button name="2" funct="Two"/>
        <Button name="3" funct="Three"/>
        <Button name="+" funct="Add"/>
        <Button name="0" funct="Zero"/>
        <Button name="0" funct="Zero"/>
        <Button name="." funct="."/>
        <Button name="=" funct="Equals"/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    flex: 1,
    backgroundColor: '#444',
  },
  buttonContainer: {
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    flexDirection: 'row',
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: '#B2BEB5',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 24,
    color: '#FFF',
  },
  answer: {
    margin: 15,
    alignSelf: 'flex-end',
    fontSize: 60,
    color: '#FFF',
  },
});
