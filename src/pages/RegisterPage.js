import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text,TextInput, Button} from 'react-native';
import FormRow from "../components/FormRow";
import noimage from '../components/noimage.png'
import * as Permissions from "expo-permissions";
import * as ImagePicker from 'expo-image-picker';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      tel: '',
      skill: '',
      image: [],
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

  async pickImage() {
    console.log("selecionar uma imagem");

    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      console.log('Acesso negado');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 0.2,
      base64: true,
    });

    if(!(await result).cancelled) {
      console.log('imagem ok', result.base64);
    }
  }

  render() {
    return(
      <View style={styles.container}>

        <FormRow first>
          <Button
            title="Selecione uma imagem"
            onPress={() => this.pickImage()}
          />
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
      </View>
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
    // flex: 1,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});


