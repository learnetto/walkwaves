import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import opencage from 'opencage-api-client';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: '51.5074, 0.1278',
      address: '',
      geocoding: false
    };
  }

  reverseGeocode = () => {
    const key = 'YOUR_API_KEY';
    this.setState({geocoding: true});
    opencage.geocode({ key, q: this.state.coords }).then(response => {
      result = response.results[0];
      console.log(result.formatted);
      this.setState({address: result.formatted, geocoding: false});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Walkwaves</Text>
        <FormLabel style={{padding: 20}}>Enter Co-ordinates (latitude, longitude)</FormLabel>
        <FormInput containerStyle={styles.input}
          onChangeText={(coords) => this.setState({coords})}
        />
        <Button title='Geocode'
          loading={this.state.geocoding}
          buttonStyle={styles.button}
          title={this.state.geocoding ? "Geocoding..." : "Geocode"}
          color='#FFFFFF'
          onPress={this.reverseGeocode}
        />
        <Text style={styles.result}>{this.state.address}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
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
