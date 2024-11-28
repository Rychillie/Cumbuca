import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, useColorScheme, View } from 'react-native';
import { colors } from './src/constants';
import { Intro } from './src/screens';

export default function App() {
  const theme = useColorScheme();

  console.log('theme', theme);

  const isTest = false;

  if (isTest) {
    return (
      <ImageBackground
        source={require('./assets/background.png')}
        style={{
          ...styles.container,
          backgroundColor: theme === 'dark' ? colors.black : colors.white,
        }}
      >
        <Intro />

        <StatusBar style="auto" />
      </ImageBackground>
    )
  }

  return (
    <View style={styles.container}>
      <Intro />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
