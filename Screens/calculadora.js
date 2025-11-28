import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function calculadoraScreen({navigation}) {        
        const [preco_original_texto, setPrecoOriginalTexto] = useState('');
        const [percentual_desconto_texto, setPercentualDescontoTexto] = useState('');
        const [valor_final, setValorFinal] = useState('0.00');
        const [valor_desconto, setValorDesconto] = useState('0.00');

        const calcularDesconto = () => {

            const preco = parseFloat(preco_original_texto || '0');
            const percentual = parseFloat(percentual_desconto_texto || '0');

            const desconto_calculado = (preco * percentual) / 100;


            const preco_final_calculado = preco - desconto_calculado;


            setValorDesconto(desconto_calculado.toFixed(2));
            setValorFinal(preco_final_calculado.toFixed(2));
        };

        return (
            <View style={estilos.container}>
                <Text style={estilos.titulo}>Calculadora de desconto</Text>


                <Text style={estilos.label}>Preço Original (R$):</Text>
                <TextInput
                    style={estilos.input}
                    value={preco_original_texto}
                    onChangeText={setPrecoOriginalTexto}
                    placeholder="Digite o preço"
                />

                <Text style={estilos.label}>Desconto (%):</Text>
                <TextInput
                    style={estilos.input}
                    value={percentual_desconto_texto}
                    onChangeText={setPercentualDescontoTexto}
                    placeholder="Digite a porcentagem"
                />


                <View style={estilos.botao}>
                    <Button title="Calcular" onPress={calcularDesconto} />
                </View>


                <View style={estilos.areaResultado}>
                    <Text style={estilos.textoResultado}>
                        valor do desconto R$ {valor_desconto}
                    </Text>
                    <Text style={estilos.textoResultadoFinal}>
                        Preço final com desconto R$ {valor_final}
                    </Text>
                </View>

                <View>
                    <button 
                    title='Lista de Carros'
                    onPress={() => navigation.navigate("calculadora")}/>
                </View>

            </View>

            
        );


    const estilos = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: '#fff',
        },
        titulo: {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'blue',
            marginBottom: 30,
            textAlign: 'center',
        },
        label: {
            fontSize: 16,
            marginBottom: 5,
            marginTop: 10,
            color: '#333',
        },
        input: {
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            borderRadius: 5,
            fontSize: 18,
        },
        botao: {
            backgroundColor: 'blue',
            padding: 15,
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 20,
        },
        textoBotao: {
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
        },
        areaResultado: {
            marginTop: 40,
            paddingTop: 20,
            borderTopWidth: 1,
            borderTopColor: '#eee',
            alignItems: 'center',
        },
        textoResultado: {
            fontSize: 16,
            color: 'green',
            marginBottom: 10,
        },
        textoResultadoFinal: {
            fontSize: 22,
            fontWeight: 'bold',
            color: 'darkblue',
            marginTop: 10,
        },
    });
}