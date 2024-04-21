import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './componentes/header';
import TodoLIst from './componentes/TodoList';
import TelaAddTarefas from './Telas/addTarefa';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import TelaLogin from './Telas/Login';
import TelaAddUser from './Telas/addUser';

 const Stack = createStackNavigator();

export default function App() {

  const[tarefas, setTarefas] = useState([ ])
  const deleta = (tarefaId)=>{
    setTarefas((Tarefas) => {
      let novasTarefas = Tarefas.filter((item) => item.id !== tarefaId)
      return novasTarefas
    })
  }
  const trocaEstado = (tarefaId) => {
    setTarefas((Tarefas)=>{
      let novasTarefas = Tarefas.map((item) => 
      item.id === tarefaId ? {...item, completado: !item.completado } : item)
      return novasTarefas
    })
  }
  const adicionaTarefa  = (tarefa) =>{
    setTarefas((Tarefas) => [
      ...Tarefas,
      {id: Date.now(), tarefa: tarefa, completed: false},
    ]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={TelaLogin}
        />
        <Stack.Screen name="Home" options={{ headerShown: false}}>
          {() => (
            <View style={styles.container}>
              <Header/>
              <TodoLIst itens={tarefas} trocaEstado={trocaEstado} deleta={deleta} />
              <StatusBar style="auto" />
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen
        options={{headerShown: false}}
        name="addUser"
        component={TelaAddUser}
        />
        <Stack.Screen 
        options={{ headerShown: false }} 
        name="addTarefa" 
        component={TelaAddTarefas} 
        initialParams={{ addTarefa: adicionaTarefa }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});