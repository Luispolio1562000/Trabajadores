import {React} from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, FlatList,} from 'react-native';
import {db} from '../server/Conexión';
import {collection, getDocs} from 'firebase/firestore';

 export default function App() {
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

async function obtenerDatos (){
  const querySnapshot = await getDocs(collection(db, "Trabajadores"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
}
  
  
  return (
    <View style={styles.container}>
      <Text>Eliminar</Text>
      <StatusBar style="auto" />

      <TextInput
              style={styles.input}
              placeholder = "Ingresa Id"
              onChangeText={(value)=>capturar('Apellidos', value) }
              />


      <Button title = "Agregar" onPress={()=>eliminar()}>Eliminar</Button>
      <Button title = "Agregar" onPress={()=>obtenerDatos()}>Obtener datos</Button>
    </View>
  );
}



