import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const PaginaPrincipal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Contato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Comprar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Carros</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{uri: 'https://i.pinimg.com/736x/84/91/1e/84911e8779c69a6534e3965fc737e2eb.jpg'}}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardDescription}>Corvette</Text>
              <Text style={styles.cardPrice}>R$ 50.000,00</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{uri: 'https://i.pinimg.com/originals/62/28/3b/62283b06624a8f7f3812968e301c5aae.jpg'}}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardDescription}>Mustang Boss </Text>
              <Text style={styles.cardPrice}>R$ 70.000,00</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{uri: 'https://retornar.com.br/wp-content/uploads/2022/07/bugatti-royale-411-scaled.jpg'}}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardDescription}>Bugatti Royale</Text>
              <Text style={styles.cardPrice}>R$ 80.000,00</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{uri: 'https://p.turbosquid.com/ts-thumb/EO/5OvwlM/HIdBeAxu/cadillac_eldorado_convertible_1959_0000/jpg/1496053239/600x600/fit_q87/de2236894459c69ff0e3896d83cc966b3b344006/cadillac_eldorado_convertible_1959_0000.jpg'}}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardDescription}>Cadillac Eldorado</Text>
              <Text style={styles.cardPrice}>R$ 90.000,00</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#808080',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  navItem: {
    padding: 10,
  },
  navText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    marginTop: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  card: {
    width: '45%',
    marginVertical: 10,
    backgroundColor: '#808080',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  buyButton: {
    backgroundColor: '#808080',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PaginaPrincipal;
