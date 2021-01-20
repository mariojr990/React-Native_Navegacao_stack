import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native'

export default function   () {
  const navigation = useNavigation();


  return ( 
  <View style={styles.container}>
      <Text>Contato</Text>
      <Button
      title="Voltar uma tela!"
      onPress={ () => navigation.goBack() }
      />

      <Button
      title="Voltar para Home"
      onPress={ () => navigation.dispatch(StackActions.popToTop()) }
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