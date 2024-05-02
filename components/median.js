import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput,  } from 'react-native';
import { Button, Icon, Text } from '@rneui/themed';
import { useState } from 'react';


function Median() {
    const [first, setfirst] = useState("")
    const [number, onChangeNumber] = useState('');
  
  async function medianf(numbers){
    const response = await fetch('https://el-statistician-api.onrender.com/median', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        numbers: numbers,
      }),
    })
    .then(response => response.json())
    .then(json => setfirst(json.result))
  }
  return (<View style={styles.container}>
  <Text>Enter numbers separated by commas</Text>
  <TextInput
    style={styles.input}
    onChangeText={(e)=>{onChangeNumber(e),medianf(e)}}
    value={number}
    placeholder="useless placeholder"
    keyboardType="numeric"
  />
  <Text>Median = {first}</Text>
  <Button
        onPress={()=>{medianf(number)}}
        title="Refresh"
        color="#0000ff"
        accessibilityLabel="Learn more about this purple button"
    ><Icon name="book" color="white" />Refresh</Button>
  <StatusBar style="auto" />
  </View>)
  }


export default Median
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  
  });