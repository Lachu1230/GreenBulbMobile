import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ProductPassport from "../screens/EnergyCalculatorTab/ProductPassport";
import TrackingMapView from "../screens/EnergyCalculatorTab/TrackingMapView";
import ProfileScreen from "../screens/ProfileTab/ProfileScreen";
//import EditProfile from "../screens/ProfileTab/EditProfile";
import Website from "../screens/ProfileTab/Website";
import ProductListScreen from "../screens/ProductTab/ProductListScreen";
import ProductDescScreen from "../screens/ProductTab/ProductDescScreen";
import CartScreen from "../screens/ProductTab/CartScreen";
//import CheckoutScreen from "../screens/ProductTab/CheckoutScreen";



const PassportTab = createStackNavigator(
    {
      ProductPassport,
      TrackingMapView
    },
    {
        initialRouteName: "ProductPassport"
    }
);


PassportTab.navigationOptions = {
  tabBarLabel: 'Passport',

};

// CarbonEmissionTab.path = '';


const ProfileTab = createStackNavigator(
    {
        ProfileScreen,
        CartScreen,
        Website
        // EditProfile,
        // AddCreditCard,
    },
    {
        initialRouteName: "ProfileScreen",
        // defaultNavigationOptions: {
        //     header: null
        // }
    }
);

ProfileTab.navigationOptions = {
  tabBarLabel: 'Profile',

};

ProfileTab.path = '';

const ProductTab = createStackNavigator(
    {
        ProductListScreen,
        ProductDescScreen,
        CartScreen,
        //CheckoutScreen
    },
    {
        initialRouteName: "ProductListScreen"
    }
);

ProductTab.navigationOptions = {
  tabBarLabel: 'Products',

};

//ProductTab.path = '';

const tabNavigator = createBottomTabNavigator({
    //PassportTab,
    ProductTab,
    ProfileTab
});

tabNavigator.path = '';

export default tabNavigator;
