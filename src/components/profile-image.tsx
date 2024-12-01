import { Image, Text, View, type ImageProps } from 'react-native';

type Props = {
  variant?: 'regular' | 'large';
  source?: ImageProps['source'];
};

export default function ProfileImage({ variant = 'regular', source }: Props) {
  const size = variant === 'regular' ? 40 : 48;
  
  if (!source) {
    return (
      <View
        style={{
          width: size,
          height: size,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: variant === 'regular' ? 32 : 40,
            lineHeight: size,
            textAlign: 'auto'
          }}
        >
          🌝
        </Text>
      </View>
    )
  }

  return (
    <Image
      source={source}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
      }}
    />
  )
}