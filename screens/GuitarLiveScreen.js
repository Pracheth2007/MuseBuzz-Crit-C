import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class GuitarLiveScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Coming soon...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
    alignSelf: 'center', 
    marginTop: 100 
    }
})