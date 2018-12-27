import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const PlaceInput = ({placeName, placeNameChangeHandler, placeSubmitHandler}) => {
    return(
    <View style={styles.inputContainer}>
        <TextInput style={styles.placeInput}
          value={placeName}
          onChangeText={placeNameChangeHandler}
          placeholder='Place name here'
        />
        <Button 
          onPress={placeSubmitHandler}
          title="Add"
          color="#841584"
          style={styles.addButton}
        />
      </View>
      )
}

export default PlaceInput;

const styles = StyleSheet.create({
    inputContainer: {
      width:'100%',
      padding: 20,
      flexDirection: 'row',
    },
    placeInput: { 
      borderColor: 'gray',
      borderWidth: 1,
      height: 44,
      width: '70%',
      borderRadius: 6,
      marginRight: 20,
      padding: 5,
    },
    addButton: { 
      width: '20%', 
    }
  
  });