import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from '../listItems';


const PlaceList = ({places, onItemDeleted}) => {
    
    return(
        <FlatList
             data={places}
             renderItem={({item}) => 
                    <ListItem   
                        placeName={item.name} 
                        placeImage={item.image}
                        onItemPressed={() => {onItemDeleted(item.key)}}
                     />}
        />
         );
}

export default PlaceList;