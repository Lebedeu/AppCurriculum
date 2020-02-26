import React from 'react';
import {ActivityIndicator, View, StyleSheet, Text, Button} from 'react-native';
import firebase from '@firebase/app/';
import '@firebase/auth';
import '@firebase/database';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
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
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    // firebase.analytics();



  }

  toRegister = () => {
    this.props.navigation.navigate('Register');
  };

  toSearch = () => {
    this.props.navigation.navigate('Search');
  };



  render() {

    return(
      <View style={styles.container}>

        {/*<FlatList*/}
        {/*  style={styes.container}*/}
        {/*  data=this.data*/}
        {/*/>*/}

        <Text>
          texto
        </Text>
        <View style={styles.button}>
          <Button
            title="Cadastrar"
            onPress={() => this.toRegister()}
          />
          <Button
            title="Pesquisar"
            onPress={() => this.toSearch()}
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
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  list: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
  }
});



