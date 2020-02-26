import React from 'react';
import { KeyboardAvoidingView, ScrollView, View, StyleSheet, Button,TextInput, TouchableOpacity, Alert} from 'react-native';
import FormRow from "../components/FormRow";
import Camera from '../components/Camera';

import firebase from '@firebase/app/';
import '@firebase/auth';
import '@firebase/database';

export default class MainPage extends React.Component {
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
  }

  onChangeHandler (field, value) {
    this.setState({
      [field]: value
    });
  }

  confirmReg = () => {
    console.log(`confirReg`)
    firebase.database().ref('curriculums').once('value', (data) => {
      var existe = true;
      this.data = data.toJSON();

      console.log(this.data);
      if(this.data === null) {
        console.log(`Dentro do IF`);
        existe = false;
      } else {
        console.log(`Dentro do ELSE`);
        console.log(`Entrando no FOR`);
        for (var property in this.data){
          if(this.data[property].name === this.state.name) {
            existe = true;

            Alert.alert(
              'Erro ao Cadastrar',
              'Currículo já cadastrado',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );

            return;
          } else {
            existe = false;
          };
        }
      }

      if(!existe) {
        Alert.alert(
          'Cadastro sendo realizado',
          'Pro favor, aguarde',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
        setTimeout( () => {
          firebase.database().ref(`curriculums/${this.state.name}`).set(
            this.state
          ).then(() => {
            console.log('Cadastrado');
            console.log('ÈSta sendo mandado');
            console.log(this.state.name);
            this.props.navigation.navigate('Detail', this.state.name);
          }).catch((error) => {
            console.log(error);
          });
        }, 2000);
      }
    });

  };

  backToMain = () => {
    this.setState({
      name: '',
      email: '',
      tel: '',
      skill: '',
      image: '',
    })
    this.props.navigation.navigate('Main');
  };

  render() {
    return(
      <ScrollView>

        <KeyboardAvoidingView style={styles.container} behavior='position' enabled>

          <FormRow first >
            <Camera />
          </FormRow>

          <FormRow>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={this.state.name}
              onChangeText={value => this.onChangeHandler('name', value)}
            />
          </FormRow>

          <FormRow >
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              keyboardType={'email-address'}
              value={this.state.email}
              onChangeText={value => this.onChangeHandler('email', value)}
            />
          </FormRow>

          <FormRow>
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              keyboardType={'numeric'}
              value={this.state.tel}
              onChangeText={value => this.onChangeHandler('tel', value)}
            />
          </FormRow>

          <FormRow last>
            <TextInput
              style={styles.input}
              placeholder="Principais Habilidades"
              multiline
              value={this.state.skill}
              onChangeText={value => this.onChangeHandler('skill', value)}
            />
          </FormRow>

          <View style={styles.button}>
            <Button
              title="Confirmar"
              onPress={() => this.confirmReg()}
            />
            <Button
              title="Cancelar"
              onPress={() => this.backToMain()}
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
});
