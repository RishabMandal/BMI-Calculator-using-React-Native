// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [text, setText] = useState("Your BMI will be displayed here");

  let height
  let weight
  let bmi
  function calculate() {
    bmi = weight / height * height;
    setText(bmi);
    setText('10');
  }

  return (
    <View style={styles.container}>
      <Text className="text-purple-700 font-bold text-2xl mt-20" style={styles.text}>BMI CALCULATOR</Text>
      <Text className="text-purple-700 bg-white w-11/12 py-14 text-center rounded-xl text-lg my-10" style={styles.text}>For advertisement</Text>
      <TextInput className="text-purple-700 my-2 text-xl" onChange={calculate} placeholder='Enter height in cm' placeholderTextColor='white' />
      <TextInput className="text-purple-700 my-2 text-xl" onChange={calculate} placeholder='Enter weight in kg' placeholderTextColor='white' />
      <Text className="text-purple-700 bg-white w-11/12 py-14 text-center rounded-xl text-lg my-10" style={styles.text}>{text}</Text>
      <Button className="text-red-600 rounded-xl" color="purple" style={styles.button} title='Calculate' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: 'black',
    alignItems: 'center',
    // justifyContent: 'center',

  },
  text: {
  },
  button: {
    // backgroundColor: 'purple',
    // color: 'purple'
  }
});
