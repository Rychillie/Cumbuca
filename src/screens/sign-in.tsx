import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'src/components';
import { useAuth } from 'src/context/auth';

export default function SignIn() {
  const { signIn, signInError, isLoading, clearErrors } = useAuth();
  const [email, setEmail] = useState('rychillie@hotmail.com');
  const [password, setPassword] = useState('12qwaszx@@');

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
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Sign In</Text>
      <View style={{ gap: 20 }}>
        <View style={{ gap: 15 }}>
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
        </View>
        {signInError ? <Text style={styles.error}>{signInError}</Text> : null}
        <Button variant='primary' onPress={handleLogin} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Sign In'}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20,
    gap: 30,
  },
  error: {
    color: 'red',
  },
});
