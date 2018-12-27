/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceList from './src/components/placeList/PlaceList';
import PlaceInput from './src/components/placeInput/PlaceInput';
import nikiMinaj from './src/assets/nicki_minaj.jpg';

 
export default class App extends Component {

  state = {
    placeName: '',
    places: []
  }

  placeNameChangeHandler = (value) => {
    this.setState({
      placeName: value,
    }); 
  }

  placeSubmitHandler = () => {
    if(this.state.placeName === "") {
      return;
    }

    this.setState(prevState => {
        return {
          places: prevState.places.concat({
            key: Math.random(),
            name: prevState.placeName,
            // image: nikiMinaj,
            image: {
              uri: 'https://bit.ly/2VfCh0P'
            }
          })
        };
    });
  }

  itemDeletedHandler = (key) => {
    this.setState(prevState => {
      return {
          places: prevState.places.filter((place) => {
          return place.key !== key;
        })
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
       
        <PlaceInput 
          placeName={this.state.placeName}
          placeNameChangeHandler={this.placeNameChangeHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />

        <PlaceList 
          places={this.state.places}
          onItemDeleted={this.itemDeletedHandler}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 60,
  },

});
