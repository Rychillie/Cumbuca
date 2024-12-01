import { StyleSheet, View } from 'react-native';

export default function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#E5E7EB',
  },
});