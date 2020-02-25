import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import Line from "../components/Line";

export default class DetailPage extends React.Component {

  toUpdate = (data) => {
    console.log(data);
    this.props.navigation.navigate('Update', data);
  };

  toDelete = (data) => {
    console.log('Currículo apagado', data);
  };

  goMain = (data) => {
    this.props.navigation.navigate('Main', data);
  }

  render() {
    const data = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Line label="Nome" content={data.name}/>
        <Line label="E-mail" content={data.email}/>
        <Line label="Telefone" content={data.tel}/>
        <Line label="Principais Habilidades" content={data.skill}/>
        <View style={styles.button}>
          <Button
            title="Atualizar"
            onPress={() => this.toUpdate(data)}
          />
          <Button
            title="Inicio"
            onPress={() => this.goMain()}
          />
          <Button
            title="Deletar"
            onPress={() => this.toDelete()}
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
    justifyContent: 'space-between',
  }
});

