import React from 'react';
import {FlatList, View, StyleSheet, Text, Button, ScrollView} from 'react-native';
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
      nomeLista: [],
    };
  }


  componentDidMount() {
    setTimeout(() => {
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
      firebase.database().ref('curriculums').once('value', (data) => {
        this.data = data.toJSON();
        this.setState({
          nomeLista: this.data,
        })
      });
    }, 1500);
    console.log(this.state.nomeLista);

  }

  toRegister = () => {
    this.props.navigation.navigate('Register');
  };

  toSearch = () => {
    this.props.navigation.navigate('Search');
  };

  render() {


    console.log(this.state.nomeLista);

    return(
      <View style={styles.container}>
        <View style={styles.containerButton}>
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

        <View>
            <FlatList
              style = {styles.container}
              data = {this.state.nomeLista}
              renderItem={
                ({item}) => (
                  <Text style={styles.item}>
                    {item.name}
                  </Text>
                )
              }
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerButton: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#c5c5c5',
  },
  container: {
    backgroundColor: '#c5c5c5',
  },
  button: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
  },
  list: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  item: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row',
  }
});



