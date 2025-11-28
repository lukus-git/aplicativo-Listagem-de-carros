import { FlatList, View, StyleSheet } from "react-native-web";
import { ActivityIndicator, Card, Text } from 'react-native-paper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useState } from "react";

export default function App() {

  const [carros, setCarros] = useState([]);
  const [loading, setLoading] = useState = (true);

  const API_URL = 'https://691bc2c93aaeed735c8e2e13.mockapi.io/carros/api/v1/produto'

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setProdutos(response.data)
      })
      .catch(error => {
        console.log('Erro ao buscar os carros', error)
      })
      .finally(() => {
        setLoading(false)
      })
  })


  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.imagem }} />
      <Card.Title title={item.marca} subtitle={item.ano} />
      <Card.Content>
        <Text style={styles.preco}>{item.modelo}</Text>
      </Card.Content>
    </Card>
  )

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={carros}
          keyExtractor={(item) => item.id}
          renderItem={renderItem} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  card: {
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3
  },
  preco: {
    marginTop: 8,
    fontWeight: 'bold'
  }
})