import Svg, { Path } from 'react-native-svg';

export default function Logo({color}: {color: string}) {
  return (
  <Svg width="49" height="48" viewBox="0 0 49 48" fill="none">
    <Path d="M44.2382 20.2742H4.49658C4.49658 20.2742 4.49659 38.9031 24.3674 38.9031C44.2382 38.9031 44.2382 20.2742 44.2382 20.2742Z" stroke={color} strokeWidth="5"/>
    <Path d="M45 12.0094L5.36523 9.09692C5.36523 9.09692 4.00003 27.6757 23.8174 29.132C43.6348 30.5882 45 12.0094 45 12.0094Z" stroke={color} strokeWidth="5" />
  </Svg>
  )
}