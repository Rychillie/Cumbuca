import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'src/components';
import { useAuth } from 'src/context/auth';

const SignUp = () => {
  const { signUp, signUpError, isLoading, clearErrors } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSignUp = async () => {
    clearErrors();
    await signUp(email, password, cpf);
  };

  useEffect(() => {
    if (signUpError) {
      // Aqui você pode adicionar lógica para exibir o erro, se necessário
    }
  }, [signUpError]);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        keyboardType='email-address'
        onChangeText={setEmail}
        value={email}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <Input
        placeholder="CPF"
        keyboardType='numeric'
        onChangeText={setCpf}
        value={cpf}
      />
      {signUpError ? <Text style={styles.error}>{signUpError}</Text> : null}
      <Button variant='primary' onPress={handleSignUp} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Sign Up'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 15,
  },
  error: {
    color: 'red',
  },
});

export default SignUp;