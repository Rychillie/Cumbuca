import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthProvider, useAuth } from 'src/context/auth';
import { Home, Onbording, SignIn, SignUp } from 'src/screens';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { loggedUser, isLoading } = useAuth();

  if (isLoading) {
    return null; // Ou um componente de carregamento
  }

  return (
    <Stack.Navigator
      initialRouteName={loggedUser ? "Home" : "Onbording"}
      screenOptions={{ headerShown: false }}
    >
      {
        loggedUser ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <>
            <Stack.Screen name="Onbording" component={Onbording} />
            <Stack.Screen
              name="Sign In"
              component={SignIn} 
              options={{
                presentation: 'formSheet',
                gestureDirection: "vertical",
                animation: "slide_from_bottom",
                sheetGrabberVisible: true,
                sheetInitialDetentIndex: 0,
                sheetAllowedDetents: [0.5, 1.0]
              }}
            />
            <Stack.Screen
              name="Sign Up"
              component={SignUp} 
              options={{
                presentation: 'formSheet',
                gestureDirection: "vertical",
                animation: "slide_from_bottom",
                sheetGrabberVisible: true,
                sheetInitialDetentIndex: 0,
                sheetAllowedDetents: [0.5, 1.0]
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
