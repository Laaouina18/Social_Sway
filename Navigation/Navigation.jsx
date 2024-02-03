import { View, Text } from 'react-native';
import React from 'react';
import Accueil from '../screens/Accueil';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";
import Faq from '../screens/Faq';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerTintColor: "white", headerStyle: {backgroundColor: "orange"}}}>
      <Drawer.Screen 
        name='Accueil'
        component={Accueil}
        options={{
          drawerIcon: ({focused, size, color}) => (
            <Icon name="home-sharp" size={size} color={color}/>
          ),
          title: 'Accueil'
        }}
      />
      <Drawer.Screen 
        name='FAQ' 
        component={Faq}
        options={{
          drawerIcon: ({focused, size, color}) => (
            <Icon name="chatbubbles" size={size} color={color}/>
          )
        }}
      />
    </Drawer.Navigator>
  );
}

export default Navigation;
