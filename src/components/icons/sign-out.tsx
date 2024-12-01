import { Line, Path, Polyline, Svg } from 'react-native-svg';

export default function SignOut({color = '#000'}: {color?: string}) {
  return (
    <Svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <Polyline points="16 17 21 12 16 7"/>
      <Line x1="21" x2="9" y1="12" y2="12"/>
    </Svg>
  )
}