import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import OnboardingScreen from "../screens/OnboardingScreen";

import AsyncStorage from "@react-native-community/async-storage";



const Stack = createNativeStackNavigator();


const AuthStack = () => {

  const [itsFirstLaunch, setItsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setItsFirstLaunch(true);
      }else{
        setItsFirstLaunch(false);
      }
    });
  }, []);

  if(itsFirstLaunch === null) {
    return null;
  }else if(itsFirstLaunch === true){
    routeName = 'Onboarding';
  }else {
    routeName = 'Login';
  }

    return(
      <Stack.Navigator initialRouteName={routeName} screenOptions={{headerShown: false}} >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen 
            name="Signup" 
            component={SignupScreen}
            options={({navigation}) => ({
                title: '',
                headerStyle: {
                    backgroundColor: '#f9fafd',
                    shadowColor: '#f9fafd',
                    elevation: 0,
                },
            })}
            />
      </Stack.Navigator>
    );
};

export default AuthStack;