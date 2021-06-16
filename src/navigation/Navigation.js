import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../screens/Search';
import MovieDetail from '../screens/MovieDetail';

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Search}
            options={{headerShown: false}}
          />
            <Stack.Screen
            name="movieDetail"
            component={MovieDetail}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
