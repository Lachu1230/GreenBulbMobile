import React from 'react';
import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import AuthScreen from "../screens/auth/AuthScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import LoginScreen from "../screens/auth/LoginScreen"
import RegisterScreen from "../screens/auth/RegisterScreen"
import PasswordResetEmailSent from "../screens/auth/PasswordResetEmailSent"
import MainTabNavigator from './MainTabNavigator';
import LandScreen from "../screens/EnergyCalculatorTab/LandScreen"
import BulbsDetailsScreen from "../screens/EnergyCalculatorTab/BulbsDetailsScreen"

import UsageDisplayScreen from "../screens/EnergyCalculatorTab/UsageDisplayScreen"

const AuthStack = createStackNavigator(
    {
        AuthScreen,
        LoginScreen,
        RegisterScreen,
        ForgotPasswordScreen,
        PasswordResetEmailSent,
        LandScreen,
        BulbsDetailsScreen,
        UsageDisplayScreen
    },
    {
        initialRouteName: "AuthScreen"
    }
);

export default createAppContainer(

  createSwitchNavigator({
    //
    Auth: AuthStack,
    Main: MainTabNavigator,
  })
);
