import React from 'react';
import { View, StyleSheet, TextInput, Button} from 'react-native';
import FormRow from "../components/FormRow";
import firebase from '@firebase/app/';
import '@firebase/auth';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      telefone: '',
      habilidades: '',
    }
  }

  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCWzhnRoUhBDan4fVT0RM1zwSdDAeXS2eo",
      authDomain: "curriculumapp-83564.firebaseapp.com",
      databaseURL: "https://curriculumapp-83564.firebaseio.com",
      projectId: "curriculumapp-83564",
      storageBucket: "curriculumapp-83564.appspot.com",
      messagingSenderId: "535976718288",
      appId: "1:535976718288:web:9a71d5f1a10a719b8793d5",
      measurementId: "G-PBE9BDJ0WQ"
    };
    // Initialize Firebase
    if ( !firebase.apps.length ) {
      firebase.initializeApp(firebaseConfig);
    }
    // firebase.analytics();

  }

  onChangeHandler (field, value) {
    this.setState({
      [field]: value
    });
  }

  toRegister = () => {
    this.props.navigation.navigate('Detail', this.state);
  };

  render() {
    return(
      <View style={styles.container}>
        <FormRow first>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={this.state.nome}
            onChangeText={value => this.onChangeHandler('nome', value)}
          />
        </FormRow>

        <FormRow >
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={this.state.email}
            onChangeText={value => this.onChangeHandler('email', value)}
          />
        </FormRow>

        <FormRow>
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={this.state.telefone}
            onChangeText={value => this.onChangeHandler('telefone', value)}
          />
        </FormRow>

        <FormRow last>
          <TextInput
            style={styles.input}
            placeholder="Principais Habilidades"
            value={this.state.habilidades}
            onChangeText={value => this.onChangeHandler('habilidades', value)}
          />
        </FormRow>

        <Button
          title="Cadastrar"
          onPress={() => this.toRegister()}
        />
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
  }
});

