import React from 'react';
import {View, StyleSheet, Text, Button, TextInput, Alert} from 'react-native';
import FormRow from "../components/FormRow";

import firebase from '@firebase/app/';
import '@firebase/auth';
import '@firebase/database';

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
    this.state = {
      nameToSearch: '',
    }
  }

  onChangeHandler (field, value) {
    this.setState({
      [field]: value
    });
  }

  search() {
    var verifica = false;
    console.log(verifica);
    console.log(`Pesquisando por ${this.state.nameToSearch}`);

    firebase.database().ref('curriculums').once('value', (data) => {
      this.data = data.toJSON();
      console.log(`Antes do FOR`);
      for (var property in this.data) {
        console.log(`No FOR`);
        console.log(this.data[property].name);


        if (this.data[property].name == this.state.nameToSearch) {
          console.log(`Dentro do IF`);
          verifica = true;
          console.log(verifica);
        }
        console.log(`verifica ${verifica}`);
      }
      console.log(`Fora do FOR`);
      console.log(verifica);
      if(verifica){
        console.log(`Dentro do ultimo IF`);
        this.toDetail();
      } else {
        Alert.alert(
          'Erro na busca',
          'Currículo não encontrado',
          [
            {text: 'Cadastrar', onPress: () => this.props.navigation.navigate('Register')},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        )
      }
    });

  }

  toDetail = () => {
    console.log(`dentro do toDetail()`);
    this.props.navigation.navigate('Detail', this.state.nameToSearch);
  };

  render() {
    return (
      <View style={styles.container}>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={this.state.nameToSearch}
            onChangeText={value => this.onChangeHandler('nameToSearch', value)}
          />
        </FormRow>
        <View style={styles.button}>
          <Button
            title="Pesquisar"
            onPress={() => this.search()}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  input: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  button: {
    padding: 15,
  },
  container: {
    paddingTop: 55,
    paddingLeft: 15,
    paddingRight: 15,
  }
});
