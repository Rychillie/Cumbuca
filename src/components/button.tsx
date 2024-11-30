import type { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Props = {
  children: ReactNode;
  variant: 'primary' | 'secondary';
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
          : styles.buttonSecondary
      ]}
      {...props}
    >
      <Text
        style={
          variant === 'primary'
            ? styles.textPrimary
            : styles.textSecondary
        }
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
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
  textPrimary: {
    color: '#fff',
  },
  textSecondary: {
    color: '#000',
  },
});
