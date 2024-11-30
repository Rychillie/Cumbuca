import AsyncStorage from '@react-native-async-storage/async-storage';

export async function userSignUp(email: string, password: string, cpf: string) {
  const user = await AsyncStorage.getItem(email);
  if (user) {
    return { error: 'User already exists' };
  }

  const newUser = {
    email,
    password,
    cpf,
    isLogged: false,
  };
  await AsyncStorage.setItem(email, JSON.stringify(newUser));

  return newUser;
}

export async function userSignIn(email: string, password: string) {
  const user = await AsyncStorage.getItem(email);
  if (!user) {
    return { error: 'User not found' };
  }

  const parsedUser = JSON.parse(user);
  if (parsedUser.password !== password) {
    return { error: 'Invalid credentials' };
  }

  await AsyncStorage.setItem(email, JSON.stringify({
    ...parsedUser,
    isLogged: true,
  }));
  return parsedUser;
}

export async function userSignOut(email: string) {
  const user = await AsyncStorage.getItem(email);
  if (!user) {
    return { error: 'User not found' };
  }

  const parsedUser = JSON.parse(user);
  if (!parsedUser.isLogged) {
    return { error: 'User not logged in' };
  }

  await AsyncStorage.setItem(email, JSON.stringify({
    ...parsedUser,
    isLogged: false,
  }));
  return parsedUser;
}

export async function getUser(email: string) {
  const user = await AsyncStorage.getItem(email);
  if (!user) {
    return { error: 'User not found' };
  }

  return JSON.parse(user);
}

export async function updateUser(email: string, password: string, cpf: string) {
  const user = await AsyncStorage.getItem(email);

  if (!user) {
    return { error: 'User not found' };
  }

  return await AsyncStorage.setItem(email, JSON.stringify({
    email,
    password,
    cpf,
    ...JSON.parse(user),
  }));
}

export async function deleteUser(email: string) {
  const user = await AsyncStorage.getItem(email);

  if (!user) {
    return { error: 'User not found' };
  }

  return await AsyncStorage.removeItem(email);
}