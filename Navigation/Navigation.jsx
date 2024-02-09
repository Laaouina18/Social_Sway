import { View, Text, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import Accueil from '../screens/Accueil';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";
import Faq from '../screens/Faq';
import { useDispatch } from 'react-redux';
import { visualiser } from '../redux/actions';


const Nav = createDrawerNavigator();

const Navigation = () => {

  const dispatch = useDispatch()

  return (
    <Nav.Navigator screenOptions={{headerTintColor : "white", headerStyle : {backgroundColor : "#2557a7"}}}>
      <Nav.Screen 
        name='Accueil'
        component={Accueil}
        options={{
          drawerIcon : ({focused, size, color}) => (
            <Icon name="home-sharp" size={size} color={color}/>
          ),
          headerRight : () => (
            <Pressable onPress={() => dispatch(visualiser())}>
              <Icon name='settings' color='white' size={22} style={{marginRight: 20}} />
            </Pressable>
          )
        }}
      />
      <Nav.Screen 
        name='FAQ' 
        component={Faq}
        options={{
          drawerIcon : ({focused, size, color}) => (
            <Icon name="chatbubbles" size={size} color={color}/>
          )
        }}
      />
    </Nav.Navigator>
  )
}

export default Navigation

