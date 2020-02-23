import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = ({ label, content = '-' }) => {
  return(
    <View style={styles.line}>
      <Text style={[styles.cell, styles.label]}>{ label } </Text>
      <Text style={[styles.cell, styles.content]}>{ content }</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  line: {
    flexDirection: 'row',
    padding: 3,
    borderWidth: 1,
    borderColor: '#c5c5c5',
  },
  cell: {
    fontSize: 15,
  },
  label: {
    fontWeight: 'bold',
    flex: 1,
  },
  content: {
    flex: 2,
    textAlignVertical: 'center',
  }
});

export default Line;
