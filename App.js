import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'

import AppNavigator from './app/navigation/AppNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import AuthNavigator from './app/navigation/AuthNavigator'

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
       <AppNavigator />
      {/* <AuthNavigator/> */}
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}
