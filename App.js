import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Leer from './Pantallas/Leer';
import Escribir from './Pantallas/Escribir';
import Actualizar from './Pantallas/Actualizar';
import Eliminar from './Pantallas/Eliminar';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla principal</Text>
      <Button
        title="Ver información de trabajadores"
        onPress={() => navigation.navigate('Leer')}
      />
      <Button
        title="Agregar trabajador"
        onPress={() => navigation.navigate('Escribir')}
      />
      <Button
        title="Actualizar datos de trabajadores"
        onPress={() => navigation.navigate('Actualizar')}
      />
      <Button
        title="Eliminar trabajador"
        onPress={() => navigation.navigate('Eliminar')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function pantallaLeer({navigation}) {
  return (
    <Leer/>
  );
}


function pantallaEscribir({navigation}) {
  return (
    <Escribir/>
  );
}

function pantallaActualizar({navigation}) {
  return (
    <Actualizar/>
  );
}

function pantallaEliminar({navigation}) {
  return (
    <Eliminar/>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Leer" component={pantallaLeer} />
        <Stack.Screen name="Escribir" component={pantallaEscribir} />
        <Stack.Screen name="Actualizar" component={pantallaActualizar} />
        <Stack.Screen name="Eliminar" component={pantallaEliminar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

