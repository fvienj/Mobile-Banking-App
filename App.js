import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Registration from './screens/Registration';
import OTP from './screens/otp'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="OTP" component={OTP} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}