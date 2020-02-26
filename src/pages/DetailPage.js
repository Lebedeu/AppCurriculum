import React from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';
import Line from "../components/Line";

import firebase from '@firebase/app/';
import '@firebase/auth';
import '@firebase/database';

export default class DetailPage extends React.Component {
  constructor(props) {
    super(props);
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
      <View style={styles.container}>
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
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

