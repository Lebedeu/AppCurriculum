import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Line from "../components/Line";

export default class SearchPage extends React.Component {
  render() {
    const dados = this.props.navigation.state.params;
    return (
      <View>
        <Line label="Nome" content={dados.nome}/>
        <Line label="E-mail" content={dados.email}/>
        <Line label="Telefone" content={dados.telefone}/>
        <Line label="Principais Habilidades" content={dados.habilidades}/>
      </View>
    );
  }
}

const styles = StyleSheet.create ({

});
