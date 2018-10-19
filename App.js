import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Walkwaves</Text>
        <FormLabel style={{padding: 20}}>Enter Co-ordinates (latitude, longitude)</FormLabel>
        <FormInput containerStyle={styles.input} />
        <Button title='Geocode'
          buttonStyle={styles.button}
          color='#FFFFFF'
        />
        <Text style={styles.result}>Human understandable address</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
  },
  button: {
    backgroundColor: '#1E88E5',
    width: 200,
  },
  result: {
    padding: 10,
  }
});
