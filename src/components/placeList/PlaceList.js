import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from '../listItems';


const PlaceList = ({ places, onItemSelected }) => {

    return (
        <FlatList
            data={places}
            renderItem={({ item }) =>
                <ListItem
                    placeName={item.name}
                    placeImage={item.image}
                    onItemPressed={() => { onItemSelected(item.key) }}
                />}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}

export default PlaceList;