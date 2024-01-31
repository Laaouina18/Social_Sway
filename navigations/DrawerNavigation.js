import { View, Text, Image } from "react-native";
import React from "react";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS, images } from "../constants";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import BottomTabNavigation from "./BottomTabNavigation";
import {

  Selection
} from "../screens";
import { SafeAreaView } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.white,
          width: 250,
        },
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerShown: false,
        headerTintColor: COLORS.black,
        drawerLabelStyle: {
          color: COLORS.black,
          fontSize: 14,
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Accueil",
          title: "Home",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={BottomTabNavigation}
      />
   

      <Drawer.Screen
        name="FAQ"
        options={{
          drawerLabel: "FAQ",
          title: "FAQ",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Feather name="home-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Selection}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
