import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'


import colors from "../config/colors"

export default function AppButton({color="primary", title, onpress}) {
  return <TouchableOpacity style={[styles.container, {backgroundColor: colors[color]} ]} onPress={onpress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: colors.primary
  },

  text:{
    fontSize: 18,
    color: colors.white,
    fontWeight:"bold",
    textTransform:"uppercase"
  }
})
