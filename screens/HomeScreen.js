import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends Component {
constructor(){
  super();
  this.state={
    like:0,
    dislike:0
  }
}
likecount=()=>{
  this.setState({like:this.state.like+1});
}
dislikecount=()=>{
  this.setState({dislike:this.state.dislike+1});
}
  render() {
    return (
      <View>
        <AppHeader />
        <View>
        <View style={styles.container}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('PianoScreen')}>
              <Text>Piano</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('GuitarScreen')}>
              <Text>Guitar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('GuitarScreen')}>
              <Text>Acoustic Guitar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('GuitarScreen')}>
              <Text>Electric Guitar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('GuitarScreen')}>
              <Text>Bass Guitar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('DrumsScreen')}>
              <Text>Drums</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ViolinScreen')}>
              <Text>Violin</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ViolinScreen')}>
              <Text>KeyBoard</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ViolinScreen')}>
              <Text>Flute</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ViolinScreen')}>
              <Text>Ukulele</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ViolinScreen')}>
              <Text>Saxophone</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ViolinScreen')}>
              <Text>Trumpet</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ViolinScreen')}>
              <Text>Accordion</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ViolinScreen')}>
              <Text>Clarinet</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ViolinScreen')}>
              <Text>Xylophone</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ViolinScreen')}>
              <Text>Harmonica</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ViolinScreen')}>
              <Text>Cello</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#9AC8EB',
    height: '100%'
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
    backgroundColor: 'pink',
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
