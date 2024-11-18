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
        onPress={() => this.props.navigation.navigate('https://www.amazon.com/s?k=drums&crid=26QTUWUXV4GLN&sprefix=dru%2Caps%2C431&ref=nb_sb_noss')}>
        <Text>Live Online Classes</Text>
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