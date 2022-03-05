import {React} from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {db} from '../server/Conexión';
import {collection, addDoc} from 'firebase/firestore';
import { async } from '@firebase/util';

export default function App () {
    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        },
      });
      
      const [state, setstate] = useState ({
          Apellidos: '',
          Nombre:'',
          Telefono: '',
      }) 

      const capturar = (atrib,valor) => {
          setstate({...state,[atrib]:valor})
      }

      async function agregar (){
          if(state.Apellidos === '' | state.Nombre === '' | state.Telefono === ''){
              alert ('Llena todos los datos antes de agregar un producto')
          } else{
              const Nombre = (state.Nombre)
              const Apellidos = (state.Apellidos)
              const Telefono = (state.Telefono)
              await addDoc (collection(db, "Trabajadores"),{
                  Apellidos: Apellidos,
                  Nombre: Nombre,
                  Telefono: Telefono,
              });
              alert('Se agregó con éxito')
          }
      }

      return(
          <View style = {styles.container}>
              <Text>Agrega la información</Text>
              <TextInput
              style={styles.input}
              placeholder = "Apellidos"
              onChangeText={(value)=>capturar('Apellidos', value) }
              />
              <TextInput
              style={styles.input}
              placeholder = "Nombre"
              onChangeText={(value)=>capturar('Nombre', value) }
              />
              <TextInput
              style={styles.input}
              placeholder = "Teléfono"
              onChangeText={(value)=>capturar('Telefono', value) }
              />
              <Button title = "Agregar" onPress={()=>agregar()}> Agregar</Button>
          </View>
      )

}