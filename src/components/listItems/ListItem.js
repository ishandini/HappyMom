import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = ({placeName, placeImage, onItemPressed}) => {
    return(
        <TouchableOpacity onPress={onItemPressed}>
            <View style={styles.listStyle} >
                <Image 
                    source={placeImage} 
                    style={styles.placeImageStyle} 
                    />
                <Text>{placeName}</Text>
            </View>
        </TouchableOpacity>
    );
}

export {ListItem};

const styles = StyleSheet.create({
    listStyle: {
        width: '100%',
        backgroundColor: '#eee',
        padding: 10,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center', 
    }, 
    placeImageStyle: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
    }
});