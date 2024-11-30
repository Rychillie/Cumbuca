import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

export default function Input({ ...props }: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={'#000'}
      autoCapitalize='none'
      {...props}
    />
  )
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderWidth: 1,
    width: '100%',
    borderRadius: 5,
  },
});
