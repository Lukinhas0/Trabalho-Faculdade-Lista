import React from "react";
import TodoItem from "./ToDoItem";
import {View, FlatList, Button, StyleSheet} from 'react-native'
import { useNavigation } from "@react-navigation/native";

const TodoLIst = ({itens, trocaEstado, deleta}) => {
        const navigation = useNavigation();
        const navegaAddTarefa = () =>{
            navigation.navigate('addTarefa');
        }
        return(
            <View style={styles.container}>
                <FlatList
                    data={itens}
                    renderItem={({item})=>(
                        <TodoItem item={item} trocaEstado={trocaEstado} deleta={deleta}/>
                    )}
                    keyExtractor={item => item.id}
                />
                <View style={styles.botao}>
                    <Button title="Adicionar Tarefa" onPress={navegaAddTarefa}/>
                 </View>
                </View>
        );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    botao:{
        margin: 25,
    }
});

export default TodoLIst;