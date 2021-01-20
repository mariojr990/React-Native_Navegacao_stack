import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Sobre({ route }) {
const navigation = useNavigation();

  return ( 
  <View style={styles.container}>
      <Text>Sobre</Text>
      <Button
      title="Voltar para Home"
      onPress={ () => navigation.goBack() }
      />
      
      <Button
      title="Contato"
      onPress= { () => navigation.navigate('Contato') }
      />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})