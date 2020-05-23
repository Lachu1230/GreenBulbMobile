import React from "react";
import {
    ActivityIndicator,
    SafeAreaView,
    Text,
    View,
} from "react-native";


export default class AuthScreen extends React.Component {
    static navigationOptions = {
      header:null
    }

    componentDidMount(){
      
      this.props.navigation.navigate('LoginScreen');
    }


    render() {
        return (
            <SafeAreaView style={{flex:1}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large"/>
            </View>
            </SafeAreaView>
        )}}
