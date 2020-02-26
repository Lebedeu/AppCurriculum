import React from 'react';
import {View, StyleSheet, Text, Button, Alert, Image, ScrollView} from 'react-native';
import Line from "../components/Line";

import firebase from '@firebase/app/';
import '@firebase/auth';
import '@firebase/database';

export default class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
    this.state = {
      name: '',
      email: '',
      tel: '',
      skill: '',
      image: '',
    }
  };

  toUpdate = (name) => {
    console.log(`Atualizando ${name}`)
    this.props.navigation.navigate('Update', name);
  };

  toDelete = () => {
    firebase.database().ref(`curriculums/${this.state.name}`).remove().then(() => {
      console.log('Currículo apagado', this.state.name);
      Alert.alert(
        'Currículo apagado',
        'Pro favor, aguarde',
        [
          {text: 'OK', onPress: () => this.backToMain()},
        ],
        {cancelable: false},
      );
    }).catch((error) => {
      console.log(error);
    });

  };

  backToMain = () => {
    this.setState({
      name: '',
      email: '',
      tel: '',
      skill: '',
      image: '',
    });
    this.props.navigation.navigate('Main');
  };

  render() {
    const name = this.props.navigation.state.params;
    var verifica = false;

    firebase.database().ref('curriculums').once('value', (data) => {
      this.data = data.toJSON();

      for (let property in this.data){
        if(this.data[property].name === name) {
          this.setState({
            name: this.data[property].name,
            email: this.data[property].email,
            tel: this.data[property].tel,
            skill: this.data[property].skill,
            image: this.data[property].image,
          });
          verifica = true;
        }
      }
    });

    return(
      <ScrollView style={styles.container}>

        <Image
          souce={{ uri: this.state.image}}
          style={styles.avatar}
        />

        <ScrollView style={styles.datailContainer}>

          <Line label="Nome" content={this.state.name}/>
          <Line label="E-mail" content={this.state.email}/>
          <Line label="Telefone" content={this.state.tel}/>
          <Line label="Principais Habilidades" content={this.state.skill}/>

          <View style={styles.button}>
            <Button
              title="Atualizar"
              onPress={() => this.toUpdate(name)}
            />
            <Button
              title="Inicio"
              onPress={() => this.backToMain()}
            />
            <Button
              title="Deletar"
              onPress={() => this.toDelete(name)}
            />
          </View>
        </ScrollView>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    padding: 20,
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
  datailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 10,
    elevation: 1,
    flex: 1,
  },
  avatar: {
  },
});

