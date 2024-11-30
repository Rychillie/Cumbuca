import { useNavigation as Navigate } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/types/navigation';

export default function useNavigation() {
  return Navigate<NativeStackNavigationProp<RootStackParamList>>();
}