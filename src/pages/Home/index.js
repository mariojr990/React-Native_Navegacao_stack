import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Touchable, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation();

  function irSobre(){
    navigation.navigate('Sobre', {nome: "Mario", email: "Mariojunior990@outlook.com"})
  }

  return ( 
  <View style={styles.container}>
      <Text>Home</Text>
      <Button
      title="Ir para sobre"
      onPress={irSobre}
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