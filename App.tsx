import axios from 'axios';
import { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  ActivityIndicator, 
  StyleSheet, 
  ScrollView 
} from 'react-native';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
  }, []);

  if (loading) return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" color="#4CAF50" />
      <Text style={styles.loadingText}>Chargement...</Text>
    </View>
  );

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>id: {data?.id}</Text>
      <Text style={styles.title}>Titre: {data?.title}</Text>
      <Text style={styles.content}>Contenu: {data?.body}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  content: {
    fontSize: 18,
    lineHeight: 24,
    color: '#555',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});

export default App;
