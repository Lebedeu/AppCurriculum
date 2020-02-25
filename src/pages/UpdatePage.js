import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import FormRow from "../components/FormRow";

export default class UpdatePage extends React.Component {
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

  goMain = (data) => {
    this.props.navigation.navigate('Main', data);
  }

  toCancelUpdate = (data) => {
    this.props.navigation.navigate('Detail', data);
  }

  toConfirmUpdate = (data) => {
    if(this.state.name != "")
      data.name = this.state.name;
    if(this.state.email != "")
      data.email = this.state.email;
    if(this.state.tel != "")
      data.tel = this.state.tel;
    if(this.state.skill != "")
      data.skill = this.state.skill;
    if(this.state.image != "")
      data.image = this.state.image;

    this.props.navigation.navigate('Detail', data);
  };

  render() {
    var data = this.props.navigation.state.params;
    return(
      <View style={styles.container}>

        <Text style={styles.image}>
          Foto
        </Text>

        <FormRow first>
          <TextInput
            style={styles.input}
            placeholder={data.name}
            onChangeText={value => this.onChangeHandler('name', value)}
          />
        </FormRow>

        <FormRow >
          <TextInput
            style={styles.input}
            placeholder={data.email}
            keyboardType={'email-address'}
            onChangeText={value => this.onChangeHandler('email', value)}
          />
        </FormRow>

        <FormRow>
          <TextInput
            style={styles.input}
            placeholder={data.tel}
            keyboardType={'numeric'}
            onChangeText={value => this.onChangeHandler('tel', value)}
          />
        </FormRow>

        <FormRow last>
          <TextInput
            style={styles.input}
            placeholder={data.skill}
            onChangeText={value => this.onChangeHandler('skill', value)}
          />
        </FormRow>

        <View style={styles.button}>
          <Button
            title="Confirmar"
            onPress={() => this.toConfirmUpdate(data)}
          />
          <Button
            title="Inicio"
            onPress={() => this.goMain()}
          />
          <Button
            title="Cancelar"
            onPress={() => this.toCancelUpdate()}
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
