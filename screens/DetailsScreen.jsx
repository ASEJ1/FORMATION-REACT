import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailsScreen = ({navigation}) => {
  const [retrievedData, setRetrievedData] = useState('');

  // Fonction pour récupérer les données depuis AsyncStorage
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('simpleData');
      if (value !== null) {
        setRetrievedData(value); // Mise à jour de l'état avec la donnée récupérée
      } else {
        setRetrievedData('Aucune donnée trouvée.');
      }
    } catch (e) {
      console.error('Erreur lors de la récupération :', e);
    }
  };

  useEffect(() => {
    getData(); // Appel de la fonction au chargement de l'écran
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Voici l'écran de Détails</Text>
      <Text style={styles.dataText}>Donnée récupérée : {retrievedData}</Text>
      <Button
        title="Retour à l'écran d'accueil"
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  dataText: {
    fontSize: 16,
    marginBottom: 20,
    color: 'blue',
  },
});

export default DetailsScreen;