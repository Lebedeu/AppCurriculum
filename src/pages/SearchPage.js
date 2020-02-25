import React from 'react';
import {View, StyleSheet, Text, Button, TextInput} from 'react-native';
import FormRow from "../components/FormRow";

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);

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
    console.log(`Pesquisando por ${this.state.nameToSearch}`);
    this.toDetail();
  }

  toDetail = () => {
    this.props.navigation.navigate('Detail', this.state);
  };

  render() {
    const dados = this.props.navigation.state.params;
    return (
      <View>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={this.state.nameToSearch}
            onChangeText={value => this.onChangeHandler('nameToSearch', value)}
          />
        </FormRow>
        <Button
          title="Pesquisar"
          onPress={() => this.search()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  input: {
    paddingLeft: 5,
    paddingRight: 5,
  },
});
