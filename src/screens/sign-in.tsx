import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'src/components';
import { useAuth } from 'src/context/auth';

const SignIn = () => {
  const { signIn, signInError, isLoading, clearErrors } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    clearErrors();
    await signIn(email, password);
  };

  useEffect(() => {
    if (signInError) {
      // Aqui você pode adicionar lógica para exibir o erro, se necessário
    }
  }, [signInError]);

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
      {signInError ? <Text style={styles.error}>{signInError}</Text> : null}
      <Button variant='primary' onPress={handleLogin} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Sign In'}
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

export default SignIn;