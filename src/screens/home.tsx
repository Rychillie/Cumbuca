import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Base, ProfileImage } from 'src/components';
import { useNavigation } from 'src/lib';

function ButtonAddProduct() {
  return (
    <View style={styles.addButton}>
      <Text style={styles.buttonText}>+</Text>
      <Text style={styles.buttonText}>New Product</Text>
    </View>
  )
}

export default function Home() {
  const navigation = useNavigation();

  const list = [...Array(10).keys()]
  // const list = [] as number[];

  return (
    <Base>
      <View style={styles.container}>
        <LinearGradient colors={['#FFFFFF', '#FFFFFF', '#FFFFFF00']} style={styles.header}>
          <Text style={styles.title}>Welcome!</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <ProfileImage />
          </TouchableOpacity>
        </LinearGradient>

        {list.length >= 1 ? (
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 128,
            }}
            style={{
              flex: 1,
              backgroundColor: "#fff",
              paddingHorizontal: 40,
            }}
          >
            {list.map((i) => (
              <TouchableOpacity
                key={i}
                style={{
                  backgroundColor: "#f1f1f1",
                  padding: 20,
                  marginVertical: 10,
                  borderRadius: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Product {i + 1}</Text>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>R$ 100,00</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ): (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
            <Text style={{ color: "#525252", maxWidth: 260, textAlign: 'center', fontSize: 18, fontWeight: '600', marginTop: 40 }}>
              Catalogue e organize seus produtos de uma forma simples e pratica.
            </Text>
            <ButtonAddProduct />
          </View>
        )}

        {list.length >= 1 && (
          <LinearGradient colors={['#FFFFFF00', '#FFFFFF', '#FFFFFF']} style={styles.footer}>
            <ButtonAddProduct />
          </LinearGradient>
        )}
      </View>
    </Base>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  header: {
    top: 0,
    position: "absolute",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 44,
    paddingHorizontal: 40,
    width: '100%',
    shadowColor: "#fff",
    zIndex: 999,
    right: 0,
    left: 0,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  footer: {
    paddingVertical: 40,
    alignItems: "flex-end",
    paddingHorizontal: 40,
    position: 'absolute',
    zIndex: 999,
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#000',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24
  }
});
