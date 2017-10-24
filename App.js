import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import LoanForm from './components/Form';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <LoanForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02629A',
  },
});
