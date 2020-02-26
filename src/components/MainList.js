import React from 'react';
import {FlatList, View, StyleSheet, Text, Button} from 'react-native';

const MainList = props => {
  const { peoples, onPressItem } = props;

  return (
    <FlatList
      style={styles.container}
      data={peoples}
      renderItem = {({ item }) => (
        <PeopleListItem
          people={ item }
          navigateToPeopleDetail={onPressItem}
        />
      )}
      keyExtractor={item => item.name.first}
    />
  );
};



export default MainList;
