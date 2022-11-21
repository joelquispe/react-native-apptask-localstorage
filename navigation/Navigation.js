import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator, Header} from '@react-navigation/stack'
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
const Stack = createStackNavigator();
const Navigation = ()=>{
    return <NavigationContainer
    
    >
        <Stack.Navigator
        initialRouteName='Login'
       
        >
            <Stack.Screen
              options={{headerShown:false}}
                name='Home'
                component={Home}
            />
            <Stack.Screen
            options={{headerShown:false}}
                name='Login'
                component={Login}
            />
            <Stack.Screen
             options={{headerShown:false}}
                name='Register'
                component={Register}
            />

            
        </Stack.Navigator>
    </NavigationContainer>
}
export default Navigation;