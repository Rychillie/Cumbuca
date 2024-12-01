import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'src/components';
import { useAuth } from 'src/context/auth';

export default function SignOut() {
  const [ touched, setTouched ] = useState(false);

  const { signOut } = useAuth();

  const color = "#7F1D1D";

  useEffect(() => {
    if (touched) {
      setTimeout(() => {
        setTouched(false);
      }, 2000);
    }
  }, [touched]);

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        paddingHorizontal: touched ? 20 : 10
      }}
      onPress={touched ? () => signOut() :  () => setTouched(true)}
      activeOpacity={touched ? 0.64 : 1}
    >
      <Icon.SignOut color={color} />
      {touched && <Text style={{ color, fontWeight: '600' }}>Sign out</Text> }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    minHeight: 40,
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#FEE2E2",
    flexDirection: 'row',
    width: 'auto',
    transformOrigin: 'center',
    gap: 6
  }
})