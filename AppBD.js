import {FlatList, View, StyleSheet} from 'react-native'
import { Card, Text} from 'react-native-paper'

export default function AppComBdlocal(){

    const carros = [
        {
            id: 1,
            marca: 'Chevrolet',
            modelo: 'Corsa',
            valor: 'R$ 31.000',
            ano: 2025,
            cor:'Cinza Chumbo',
            imagem: 'https://noticiassobreautomovel.com.br/wp-content/uploads/2024/04/Opel-Corsa-2025-preco.jpg'
        },
    ]

    const renderItem = ({item}) => (
        <Card style={styles.card}>
            <Card.Cover source={{uri: item.imagem}} />
            <Card.Title title={item.nome} subtitle={item.descricao}/>
            <Card.Content>
                <Text style={styles.preco}>{item.preco}</Text>
            </Card.Content>
        </Card>
     )

     return(
        <View>
            <FlatList
            data={carros}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}/>
       </View>     
     )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5'
    },
    card:{
        marginBottom:12,
        borderRadius:10,
        elevation:3
    },
    preco:{
        marginTop:8,
        fontWeight:'bold'
    }
})