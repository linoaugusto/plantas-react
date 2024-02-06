import {
  SafeAreaView,
  Text,
  StyleSheet,
  Alert,
  Button,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import React from 'react';
import { styles } from './components/styles';

const App = () => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.container}>
      <View style={styles.imageView}>
        <Image source={require('./assets/logo.jpeg')} style={styles.logo} />
      </View>
      <Text style={styles.titulo}>Sistema de Login</Text>
      <Text style={styles.subtitle}>
        Bem-vindo(a)! Digite seus dados abaixo.
      </Text>
      <View style={styles.inputLoginView}>
        <Text style={styles.labelInputField}>Email</Text>
        <TextInput placeholder="Email" style={styles.inputField} placeholderTextColor="#73d5d3"></TextInput>
      </View>
      <View style={styles.inputLoginView}>
        <Text style={styles.labelInputField}>Senha</Text>
        <TextInput placeholder="******" style={styles.inputField} placeholderTextColor="#73d5d3"></TextInput>
      </View>

      <TouchableOpacity style={styles.forgotPasswordView}>
        <Text style={styles.forgotPasswordText}>Esqueci a senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSignInTouchable}>
        <Text style={styles.buttonSignInText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.signUpView}>
        <Text style={styles.signUpText}>Não tem outra conta?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.createdBy}>Criado por Menos</Text>
    </ScrollView>
  );
};

export default App;
