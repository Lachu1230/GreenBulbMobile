import React, { Component }  from 'react'
import {View ,SafeAreaView,KeyboardAvoidingView,FlatList,StyleSheet,TouchableHighlight,AsyncStorage} from 'react-native';

import { Block,Button,Text,Input,Icon } from 'galio-framework';
class ProfileScreen extends Component{
    static navigationOptions = {
      title:"Profile"
    }

    constructor(props){
      super(props)
      this.state = {
        userEmail : "",
        userName : ""
      }
    }
    async componentWillMount(){
        let e = await AsyncStorage.getItem('userEmail')
         let u = await AsyncStorage.getItem('userName')
        let email = e ? e : "test@123.com"
        let username = u ? u : "Pavan"
        this.setState({
          userEmail : email,
          userName : username
        })
    }

    editAccountPressed = ()=>{

    }

    addCardPressed = ()=>{
        this.props.navigation.navigate("Website")

    }

    LogoutPressed = ()=>{
        console.log("logout")
        AsyncStorage.clear()
        this.props.navigation.navigate('AuthScreen')
    }

    render(){
          const {userEmail,userName} = this.state
          return (
            <View style={{flex:1,marginLeft:20,marginRight:20,marginTop:50,alignItems:'center'}}>
                <View style={{flex:1,textAlign:'center'}}>
                  <View style={{flex:1}}>
                      <Text h1> Profile</Text>
                  </View>
                  <View style={{flex:1}}>
                  {/*<Text h5 style={{textAlign:'center'}}>{userEmail}</Text>*/}
                  <Text h5 style={{textAlign:'center'}}>{userName}</Text>

                  </View>


                </View>

                <View style={{flex:1,justifyContent:'space-around'}} >
                    <Button radius={10} color="info" uppercase onPress={this.editAccountPressed}> Edit Account</Button>
                    <Button radius={10} color="info" uppercase onPress={this.addCardPressed}> GreenBulbs Website</Button>
                    <Button radius={10} color="info" uppercase
                    onPress={()=>{this.props.navigation.navigate('CartScreen')}}
                    > Show Cart </Button>
                    <Button radius={10} color="info" uppercase onPress={this.LogoutPressed} > log out</Button>

                </View>

            </View>
          )

      }


}

export default ProfileScreen
