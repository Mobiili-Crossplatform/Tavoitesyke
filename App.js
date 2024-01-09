import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

const [Age, setAge] = useState('');
const [Limit, setLimit] = useState(0);

function calculate(){

  const resultLow = (220 - Age.replace(',','.')) * 0.65
  const resultHigh = (220 - Age.replace(',','.')) * 0.85
  const result = resultLow.toFixed(2) + ' - ' + resultHigh.toFixed(2)
  setLimit(result)
}
  return (
    <View style={styles.container}>

      <Text style={styles.field}>Age</Text>

      <TextInput keyboardType='decimal-pad'
      value={Age}onChangeText={Text =>setAge(Text)}/>

      <Text style={styles.field}>Limit</Text>
      <Text style={styles.field}>{Limit}</Text>
      <Button onPress={calculate}title ='calculate'></Button>
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
});