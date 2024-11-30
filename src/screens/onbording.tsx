import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'src/components';
import { useNavigation } from 'src/lib';

const Onbording = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Button
        variant='primary'
        onPress={() => navigation.navigate('Sign In')}
      >
        Sign In
      </Button>
      <Button
        variant='secondary'
        onPress={() => navigation.navigate('Sign Up')}
      >
        Sign Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

export default Onbording;