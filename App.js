import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
