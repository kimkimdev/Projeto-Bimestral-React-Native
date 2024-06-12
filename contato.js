import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContatoPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.text}>Entre em contato conosco através dos seguintes meios:</Text>
      <Text style={styles.info}>Telefone: (11) 9999-9999</Text>
      <Text style={styles.info}>Email: classic_cars@gmail.com</Text>
      <Text style={styles.info}>Endereço: Rua Guarani, 735 - Diadema - São Paulo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', 
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 20,
  },
  text: {
    color: '#fff', 
    marginBottom: 10,
  },
  info: {
    color: '#fff', 
    marginBottom: 5,
  },
});

export default ContatoPage;
