import type { ReactNode } from 'react';
import { Dimensions, SafeAreaView } from 'react-native';

type Props = {
  children: ReactNode;
}

export default function Base({ children, ...props }: Props) {
  const { width, height } = Dimensions.get('screen');

  return (
    <SafeAreaView
      {...props}
      style={{
        backgroundColor: "#fff",
        flex: 1,
        width,
        height
      }}
    >
      {children}
    </SafeAreaView>
  )
}