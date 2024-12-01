import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Platform } from 'react-native';
import { AuthProvider, useAuth } from 'src/context/auth';
import { Home, Onbording, Settings, SignIn, SignUp } from 'src/screens';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { loggedUser, isLoading } = useAuth();

  if (isLoading) {
    return null; // Ou um componente de carregamento
  }

  return (
    <Stack.Navigator
      initialRouteName={loggedUser ? "Home" : "Onbording"}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#fff",
        }
      }}
    >
      {
        loggedUser ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{
                presentation: Platform.OS === 'ios' ? 'formSheet' : 'modal',
                sheetCornerRadius: 30,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Onbording"
              component={Onbording}
            />
            <Stack.Screen
              name="Sign In"
              component={SignIn} 
              options={{
                presentation: Platform.OS === 'ios' ? 'formSheet' : 'modal',
                gestureDirection: "vertical",
                animation: "slide_from_bottom",
                sheetGrabberVisible: true,
                sheetInitialDetentIndex: 0,
                sheetAllowedDetents: [0.5, 0.5],
                sheetCornerRadius: 30,
              }}
            />
            <Stack.Screen
              name="Sign Up"
              component={SignUp} 
              options={{
                presentation: Platform.OS === 'ios' ? 'formSheet' : 'modal',
                gestureDirection: "vertical",
                animation: "slide_from_bottom",
                sheetGrabberVisible: true,
                sheetInitialDetentIndex: 0,
                sheetAllowedDetents: [0.5, 0.5],
                sheetCornerRadius: 30,
              }}
            />
          </>
        )
      }
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}