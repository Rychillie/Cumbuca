import type { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Props = {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'danger';
};

export default function Button({
  children,
  variant,
  ...props
} : Props & TouchableOpacityProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary'
          ? styles.buttonPrimary
          : variant === 'secondary'
          ? styles.buttonSecondary
          : styles.buttonDanger
      ]}
      {...props}
    >
      <Text
        style={[
          styles.text,
          variant === 'primary'
            ? styles.textPrimary
            : variant === 'secondary'
            ? styles.textSecondary
            : styles.textDanger
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
  },
  buttonPrimary: {
    backgroundColor: '#000',
  },
  buttonSecondary: {
    backgroundColor: '#fff',
  },
  buttonDanger: {
    backgroundColor: 'red',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  textPrimary: {
    color: '#fff',
  },
  textSecondary: {
    color: '#000',
  },
  textDanger: {
    color: '#fff',
  },
});
