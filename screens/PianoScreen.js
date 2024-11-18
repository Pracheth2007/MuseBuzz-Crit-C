import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class JokeScreen extends Component {
  render() {
    return (
      <View style={styles.buttonsContainer}>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() => this.props.navigation.navigate('PianoVideoScreen')}>
        <Text>Recorded Video Learning</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() => this.props.navigation.navigate('PianoLiveScreen')}>
        <Text>Live Online Classes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => this.props.navigation.navigate('https://www.amazon.com/s?k=Piano&crid=3MQIWC1CKRSC&sprefix=pian%2Caps%2C456&ref=nb_sb_noss_2')}>
        <Text>ORDER YOUR PIANO</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 100,
  },
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
  },
});
