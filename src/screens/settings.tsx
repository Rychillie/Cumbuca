import React, { type ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { Base, ProfileImage, Separator, SignOut } from 'src/components';

type ButtonThemeProps = {
  children: ReactNode;
  isActive?: boolean;
}

function ButtonTheme({ children, isActive, ...props }: ButtonThemeProps) {
  return (
    <TouchableOpacity
      {...props}
      style={{
        minHeight: 32,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 25,
        backgroundColor: isActive ? "#fcfcfc" : "transparent",
      }}
    >
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}

function ItemTheme() {
  const colorScheme = useColorScheme();
  
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontWeight: "700", fontSize: 16 }}>Theme:</Text>

      <View
        style={{
          flexDirection: "row",
          borderRadius: 25,
          backgroundColor: "#f1f1f1",
          borderColor: "#f1f1f1",
          borderWidth: 1,
        }}
      >
        <ButtonTheme isActive={colorScheme === 'light'}>Light</ButtonTheme>
        <ButtonTheme isActive={colorScheme === 'dark'}>Dark</ButtonTheme>
      </View>
    </View>
  )
}

export default function Settings() {

  return (
    <Base>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.details}>
            <ProfileImage variant='large' />
            <Text numberOfLines={1} style={styles.title}>You</Text>
          </View>

          <SignOut />
        </View>

        <Separator />

        <View style={styles.main}>
          <ItemTheme />
        </View>

        <Separator />

        <TouchableOpacity style={{ marginVertical: 44 }}>
          <Text style={{ color: "red" }}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </Base>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 44,
    gap: 20,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  title: {
    flex: 1,
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  main: {
    paddingVertical: 44,
  },
});