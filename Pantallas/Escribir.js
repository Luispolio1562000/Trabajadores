import {React} from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {db} from '../server/Conexión';
import {collection, addDoc} from 'firebase/firestore';


