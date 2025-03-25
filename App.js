import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

const App = () => {
    // Estados para armazenar a idade digitada e o resultado da verificação
    const [idade, setIdade] = useState('');
    const [resultado, setResultado] = useState('');

    // Função que verifica se a idade digitada corresponde a um maior ou menor de idade
    const verificarIdade = () => { 
        const idadeNumerica = parseInt(idade); // Converte a string digitada para número inteiro

        if (isNaN(idadeNumerica)) {
            // Se a conversão falhar, exibe uma mensagem de erro
            setResultado('Erro. Insira uma idade válida.');
        } else if (idadeNumerica >= 18) {
            // Se a idade for 18 ou mais, exibe que a pessoa é maior de idade
            setResultado('Você é maior de idade.');
        } else {
            // Se a idade for menor que 18, exibe que a pessoa é menor de idade
            setResultado('Você é menor de idade.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verifique Sua Idade</Text> 

            {/* Campo de entrada para digitar a idade */}
            <TextInput
                style={styles.input}
                placeholder="Digite sua idade"
                keyboardType="numeric" // Define que apenas números podem ser digitados
                value={idade}
                onChangeText={setIdade} // Atualiza o estado ao digitar
            />
            
            {/* Campo de entrada para exibir o resultado da verificação */}
            <TextInput
                style={styles.input}
                placeholder="Resultado"
                keyboardType="numeric"
                value={resultado}
                onChangeText={setResultado} // Mantém o valor atualizado
                editable={false} // Impede a edição manual do campo
            />

            {/* Botão que executa a verificação ao ser pressionado */}
            <Button title="Verificar" onPress={verificarIdade} color="#655578" />
        </View>
    );
};

export default App;

// Estilos para a interface do aplicativo
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E6E6FA', // Cor de fundo do aplicativo
        flex: 1,
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center', // Centraliza horizontalmente
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#655578',
        marginBottom: 15,
    },
    title2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#655578',
        marginTop: 12,
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: '#655578', // Cor da borda do campo de entrada
        borderWidth: 2,
        borderRadius: 8,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    result: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 20,
    },
});