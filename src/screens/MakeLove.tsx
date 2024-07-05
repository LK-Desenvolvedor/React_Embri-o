import { StyleSheet, Text, View } from 'react-native';

export default function MakeLove() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MakeLove</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
