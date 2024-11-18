import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class PianoLiveScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>The Meeting Link Will Be Shared To Your Email Id</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
    alignSelf: 'center', 
    marginTop: 500,
    backgroundColor: 'yellow',
    }
})