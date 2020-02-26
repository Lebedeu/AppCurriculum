import React from 'react';
import {View, StyleSheet, Text, TextInput, Button, KeyboardAvoidingView, ScrollView, Alert} from 'react-native';

import FormRow from "../components/FormRow";
import Camera from '../components/Camera';

import firebase from '@firebase/app/';
import '@firebase/auth';
import '@firebase/database';

export default class UpdatePage extends React.Component {
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
  dataAux = {
    name: '',
    email: '',
    tel: '',
    skill: '',
    image: '',
  };

  onChangeHandler (field, value) {
    this.setState({
      [field]: value
    });
  };

  toCancelUpdate = () => {
    this.setState({
      name: '',
      email: '',
      tel: '',
      skill: '',
      image: '',
    });
    this.props.navigation.navigate('Main');
  };

  toConfirmUpdate = () => {

    if(this.state.name == "") {
      this.state.name = this.dataAux.name;
    }
    if(this.state.email == "") {
      this.state.email = this.dataAux.email;
    }
    if(this.state.tel == "") {
      this.state.tel = this.dataAux.tel;
    }
    if(this.state.skill == "") {
      this.state.skill = this.dataAux.skill;
    }
    if(this.state.image == "") {
      this.state.image = this.dataAux.image;
    }

    console.log(this.state);
    console.log(this.dataAux);

    firebase.database().ref(`curriculums/${this.state.name}`).set(
      this.state
    ).then(() => {
      Alert.alert(
        'Atualizando',
        'Pro favor, aguarde',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
      this.props.navigation.navigate('Detail', this.state.name);
    }).catch((error) => {
      console.log(error);
    });

  };

  render() {
    const name = this.props.navigation.state.params;

    firebase.database().ref('curriculums').once('value', (data) => {
      this.data = data.toJSON();

      for (let property in this.data){
        if(this.data[property].name == name) {

          this.dataAux.name = this.data[property].name;
          this.dataAux.email = this.data[property].email;
          this.dataAux.tel = this.data[property].tel;
          this.dataAux.skill = this.data[property].skill;
          this.dataAux.image = this.data[property].image;

        }
      }
    });

    return(
      <ScrollView>

        <KeyboardAvoidingView style={styles.container} behavior='position' enabled>

          <FormRow first >
            <Camera />
          </FormRow>

          <Text style={styles.text}>Nome:</Text>
          <FormRow>
            <TextInput
              style={styles.input}
              placeholder={this.dataAux.name}
              value={this.state.name}
              onChangeText={value => this.onChangeHandler('name', value)}
            />
          </FormRow>

          <Text style={styles.text}>E-mail:</Text>
          <FormRow >
            <TextInput
              style={styles.input}
              placeholder={this.dataAux.email}
              keyboardType={'email-address'}
              value={this.state.email}
              onChangeText={value => this.onChangeHandler('email', value)}
            />
          </FormRow>

          <Text style={styles.text}>Telefone:</Text>
          <FormRow>
            <TextInput
              style={styles.input}
              placeholder={this.dataAux.tel}
              keyboardType={'numeric'}
              value={this.state.tel}
              onChangeText={value => this.onChangeHandler('tel', value)}
            />
          </FormRow>

          <Text style={styles.text}>Principais Habilidades:</Text>
          <FormRow last>
            <TextInput
              style={styles.input}
              placeholder={this.dataAux.skill}
              multiline
              value={this.state.skill}
              onChangeText={value => this.onChangeHandler('skill', value)}
            />
          </FormRow>

          <View style={styles.button}>
            <Button
              title="Confirmar"
              onPress={() => this.toConfirmUpdate()}
            />
            <Button
              title="Cancelar"
              onPress={() => this.toCancelUpdate()}
            />
          </View>

        </KeyboardAvoidingView>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  image: {
    aspectRatio: 1,
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  text: {
    fontSize: 10,
  }
});
