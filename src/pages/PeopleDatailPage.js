import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';

import Line from '../components/Line';
import {capitalizeFirstLetter} from "../util";

export default class PeopleDatailPage extends React.Component {
  render() {
    const { people } = this.props.navigation.state.params;

    return (
      <ScrollView style={styles.container}>
        <Image
          source={{ uri: people.picture.large }}
          style={styles.avatar}
        />

        <ScrollView style={styles.datailContainer}>
          <Line label="Nome: " content={`${
            capitalizeFirstLetter(people.name.first)
          } ${
            capitalizeFirstLetter(people.name.last)
          }`}/>
          <Line label="Tel.: " content={people.cell}/>
          <Line label="Email: " content={people.email}/>
          <Line label="Principais Habilidades: " content={people.skill}/>
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  avatar: {
    aspectRatio: 1,
    borderRadius: 10,
  },
  container: {
    padding: 20,
    marginBottom: 5,
  },
  datailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    elevation: 1,
  }
});
