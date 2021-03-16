import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from 'react-native-vector-icons';
import User from './Screens/User'
import Search from './Screens/Search'
import Product from './Screens/Product'
import Login from './Screens/Login';


const Tab = createBottomTabNavigator();
 

export default function App() {
  
  return (
    <NavigationContainer >
      <Tab.Navigator style={styles.container}>
        <Tab.Screen 
        name="Login" 
        component={Login}
        options={{
          tabBarIcon: ({color,size}) => (
            <Ionicons name='ios-person-outline' color={color} size={size} />
          )
        }} 
        />
        <Tab.Screen 
        name="Product" 
          component={Product}
        options={{
            tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-list-outline' color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
        name="Search" 
        component={Search} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='ios-search' color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
        name="User" 
        component={User} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='ios-settings-outline' color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center'
  },
  tab: {
    fontSize: 20,
    fontFamily: 'Concert One',
    textAlign: 'center',
    marginBottom: 10
  }
  
});
