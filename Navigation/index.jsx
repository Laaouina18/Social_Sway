import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Nvbar from './Navbar';
import Profile from '../screens/Profile';
import Pub from '../screens/Pub';
import Navbar from './Navbar';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ statusBarColor: 'black', headerTintColor: "white", headerStyle: { backgroundColor: 'orange' } }}>
        <Stack.Screen name='Home' component={Navbar} options={{ headerShown: false }} />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={({ route }) => ({ title: `user de ${route.params.user.name}`, headerShadowVisible: false })}
        />
        <Stack.Screen
          name='Pub'
          component={Pub}
          options={({ route }) => ({ title: `${route.params.post.title}` })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
