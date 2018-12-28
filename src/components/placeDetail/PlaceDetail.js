import React from 'react';
import { Modal, View, Text, Image, Button, StyleSheet } from 'react-native';

const PlaceDetail = ({ selectedPlace, onItemDelete, onItemClose }) => {
    let modelContent = null;

    if (selectedPlace !== null) {
        modelContent = (
            <View>
                <Image
                    resizeMode='contain'
                    source={selectedPlace.image}
                    style={styles.imageStyle} />
                <Text style={styles.placeName} > {selectedPlace.name} </Text>
            </View>
        );
    }

    return (
        <Modal
            visible={selectedPlace !== null}
            animationType='slide'
            onRequestClose={onItemClose}
        >
            <View style={styles.modalContainer}>
                {modelContent}
                <View>
                    <Button title="Delete" color="red" onPress={onItemDelete} />
                    <Button title="Close" onPress={onItemClose} />
                </View>
            </View>
        </Modal>
    );
}

export default PlaceDetail;

const styles = StyleSheet.create({
    modalContainer: {
        margin: 20,
    },
    imageStyle: {
        height: 300,
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28,
        textTransform: 'uppercase',
    },
});