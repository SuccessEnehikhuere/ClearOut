import { Image, ImageBackground, StatusBar, StyleSheet, Text, View, Platform, Button } from "react-native"
import AppButton from "../components/AppButton"

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.container}
      blurRadius={6}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.text}>Sell what you don’t need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Log in" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: 'center',
    // paddingTop: Platform.OS==="android" ? StatusBar.currentHeight : 0,
    position: 'absolute',
    top: 70,
  },
  text: {
    fontWeight: '600',
    paddingVertical: 20,
  },
})