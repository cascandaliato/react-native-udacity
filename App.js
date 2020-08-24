import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import AddEntry from './components/AddEntry';

export default function App() {
  return <AddEntry />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: { color: '#fff' },
});
