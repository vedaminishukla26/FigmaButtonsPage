import { createStackNavigator } from '@react-navigation/stack'
import HomePage from './screens/HomePage'
import ButtonPage from './screens/ButtonPage'

const Stack = createStackNavigator()

const StackNavigator : React.FC = () => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Buttons" component={ButtonPage} />
        </Stack.Navigator>
    )
}

export default StackNavigator