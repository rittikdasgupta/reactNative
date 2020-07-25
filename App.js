//REACT IMPORTS
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler'
import {StyleSheet, Button} from "react-native";

//REACT NATIVE NAVIGATION IMPORTS
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";

//COMPONENTS IMPORT
import Home from './components/Home'; 
import Profile from './components/Profile';
import Signin from './components/signin';
import Signup from './components/signup';


//ICONS IMPORT
import {Feather} from '@expo/vector-icons';


//NAVIGATOR INITIALIZATION
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


//STACK NAVIGATOR FOR HOME SCREEN
const StackNavigationOne = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{title:"Home Screen",
      headerRight: () => (
            <TouchableOpacity activeOpacity={0.8}>
              <Feather name="menu" color="black"/>
            </TouchableOpacity>
            )}}/>
      <Stack.Screen name="Profile" component={Profile} options={{title:"Profile Screen"}}/>
    </Stack.Navigator>
  );
}


//STACK NAVIGATOR FOR AUTHENTICATION SCREEN
const StackNavigationTwo = () => {
  return(
    <Stack.Navigator initialRouteName='signup'>
      <Stack.Screen name="signin" component={Signin} options={{title:'Sign In',
      headerRight: () => (
              <TouchableOpacity activeOpacity={0.8}>
                <Feather name="menu" color="black"/>
              </TouchableOpacity>
            )}}/>
      <Stack.Screen name="signup" component={Signup} options={{title:'Sign Up'}}/>
    </Stack.Navigator>
  );
}


//DRAWER NAVIGATOR
function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Auth">
        <Drawer.Screen name="Home" component={StackNavigationOne}/>
        <Drawer.Screen name="Auth" component={StackNavigationTwo}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App