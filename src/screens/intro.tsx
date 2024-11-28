import { BlurView } from 'expo-blur';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { Logo } from '../components';
import { colors } from '../constants';


export default function Intro() {
  const { width, height } = Dimensions.get('window');
  const theme = useColorScheme();

  const primary = theme === 'dark' ? colors.white : colors.black;
  const secondary = theme === 'dark' ? colors.secondaryLight : colors.secondaryDark;

  return (
    <BlurView
      intensity={128}
      tint={theme === 'dark' ? 'dark' : 'light'}
      style={{
        backgroundColor: theme === 'dark'
          ? colors.bgTransparentDark
          : colors.bgTransparentLight,
        ...styles.blur,
        width,
        height
      }}
      experimentalBlurMethod='dimezisBlurView'
    >
      <SafeAreaView style={{...styles.screen, width, height }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.intro}>
              <Logo color={primary} />
              
              <View style={styles.welcomeBox}>
                <Text
                  style={{
                    ...styles.welcomeText,
                    color: secondary,
                  }}
                >
                  Bem vindo ao
                </Text>
                <Text
                  style={{
                    ...styles.cumbuca,
                    color: primary,
                  }}
                >
                  Cumbuca
                </Text>
              </View>
            </View>

            <Text
              style={{
                ...styles.subscribeText,
                color: secondary,
              }}
            >
              Seu cadastro pratico de produtos.
            </Text>
          </View>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Começar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>


      <View style={{...styles.circle, ...styles.circleTop}} />
      <View style={{...styles.circle,...styles.circleBottom}} />
    </BlurView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blur: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  circleTop: {
    backgroundColor: '#66E1F5',
    opacity: 0.1,
    top: -100,
    left: -180,
  },
  circleBottom: {
    backgroundColor: '#FF949E',
    opacity: 0.4,
    top: 400,
    right: -200,
  },
  circle: {
    width: 400,
    height: 400,
    borderRadius: 200,
    position: 'absolute',
    zIndex: -1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    height: '100%',
    width: '100%',
  },
  header: {
    marginTop: 104,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  intro: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },
  welcomeBox: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    letterSpacing: 0.80,
  },
  cumbuca: {
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 48,
  },
  subscribeText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    maxWidth: 240,
  },
  buttonContainer: {
    backgroundColor: '#000000',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 28,
    marginHorizontal: 40,
    marginBottom: 32,
    width: "100%",
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
  }
});
