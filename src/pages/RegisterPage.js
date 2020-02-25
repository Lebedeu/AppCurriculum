import React from 'react';
import { ScrollView, View, StyleSheet, Text,TextInput, Button, Image} from 'react-native';
import FormRow from "../components/FormRow";
import * as Permissions from "expo-permissions";
import * as ImagePicker from 'expo-image-picker';
import Camera from '../components/Camera'

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

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

  toDetail = () => {
    this.props.navigation.navigate('Detail', this.state);
  };

  toMain = () => {
    this.setState({
      name: '',
      email: '',
      tel: '',
      skill: '',
      image: [],
    })
    this.props.navigation.navigate('Main');
  };

  render() {
    return(
      <ScrollView style={styles.container}>

        <FormRow first>
          <Camera/>
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
            onPress={() => this.toDetail()}
          />
          <Button
            title="Cancelar"
            onPress={() => this.toMain()}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
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
    justifyContent: 'space-between',
  }
});




