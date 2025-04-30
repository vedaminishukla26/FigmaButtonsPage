import {GestureHandlerRootView } from 'react-native-gesture-handler'
import { Text, View } from 'react-native';
import HomePage from './screens/HomePage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigator from './StackNavigator';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex:1 }} >
        <StackNavigator />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
