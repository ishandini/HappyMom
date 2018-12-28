/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {connect} from 'react-redux';

import PlaceList from './src/components/placeList/PlaceList';
import PlaceInput from './src/components/placeInput/PlaceInput';
import nikiMinaj from './src/assets/nicki_minaj.jpg';
import PlaceDetail from './src/components/placeDetail/PlaceDetail';
import {addPlace, deletePlace, selectPlace, deSelectPlace} from './src/store/actions';

class App extends Component {

  state = {
    placeName: '',
  }

  placeNameChangeHandler = (value) => {
    this.setState({
      placeName: value,
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName === "") {
      return;
    }

    this.props.onAddPlace(this.state.placeName);
  }

  itemSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
  }

  itemDeleteHandler = () => {
    this.props.onDeletePlace();
  }

  itemCloseHandler = () => {
    this.props.onDeSelectPlace();
  }

  render() {
    return (
      <View style={styles.container}>

        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDelete={this.itemDeleteHandler}
          onItemClose={this.itemCloseHandler}
        />

        <PlaceInput
          placeName={this.state.placeName}
          placeNameChangeHandler={this.placeNameChangeHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />

        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
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

const mapStateToProp = (state) => {
    return {
      places: state.places.places, 
      selectedPlace: state.places.selectedPlace,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeSelectPlace: () => dispatch(deSelectPlace())
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(App);