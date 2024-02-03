import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './Navbar';
import ProfileScreen from '../screens/Profile';
import SinglePost from '../screens/SinglePost';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ statusBarColor: 'black', headerTintColor: "white", headerStyle: { backgroundColor: 'orange' } }}>
        <Stack.Screen name='Home' component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen
          name='Profile'
          component={ProfileScreen}
          options={({ route }) => ({ title: `Portfolio de ${route.params.portfolio.name}`, headerShadowVisible: false })}
        />
        <Stack.Screen
          name='SinglePost'
          component={SinglePost}
          options={({ route }) => ({ title: `${route.params.post.title}` })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
