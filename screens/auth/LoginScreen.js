import React, { Component }  from 'react'
import {View ,SafeAreaView,KeyboardAvoidingView,FlatList,StyleSheet,TouchableHighlight,AsyncStorage,Platform} from 'react-native';

import { Block,Button,Text,Input,Toast } from 'galio-framework';
import { Formik } from "formik";
import axios from 'axios'
import * as AppAuth from 'expo-app-auth';
import config from '../../constants/Config'
class LogInScreen extends Component
{


  static navigationOptions ={
    header:null,
    gesturesEnabled: false
  }

  state ={
    error: false,
    loading:false,
    isShow:false,
    clientIdIos: "1005623441565-mfdqn6adv63dm84993p4dbb1l02h5vsn.apps.googleusercontent.com",
    clientIdAnroid:"1005623441565-ea5f4qjg5easdrackrmn7ta6jjkbn4g0.apps.googleusercontent.com",
    config : {}
  }
  constructor(props){
      super(props)
  }
  componentDidMount(){
    const config = {
        issuer: 'https://accounts.google.com',
        clientId: Platform.OS === 'ios' ? this.state.clientIdIos : this.state.clientIdAnroid,
        scopes: ['profile','email']
      };
      this.setState({
        config : config
      })
  }

   signInAsync = async () => {

      const authState = await AppAuth.authAsync(this.state.config); // response
      console.log(authState);

      // await cacheAuthAsync(authState);
      // await AsyncStorage.setItem('userEmail',)
      // await AsyncStorage.setItem('userName',res.data.name)
      this.props.navigation.navigate('LandScreen')

      console.log('signInAsync', authState);

      return authState;
  }

  handleForgotPasswordPressed = () => {

    this.props.navigation.navigate('ForgotPasswordScreen')
  }

  render(){

    return (

      <Block safe center flex style={styles.root}>
          <Formik
              initialValues={{email: "",password:""}}

              validate={values => {
                let errors = {}
                if (values.email === "") {
                  errors.email = "Please enter an email address.";
                }
                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                  errors.email = "Invalid Email"
                }
                if (values.password === "") {
                  errors.password = "Please enter a password.";
                }
                return errors;
              }}

              onSubmit={ async(values) =>{
                console.log(values.email);
                axios.post(config.api_url+"/login",{
                  "password":values.password,
                  "email":values.email

                }).then( async (res) => {

                  await AsyncStorage.setItem('userEmail',res.data.email)
                  await AsyncStorage.setItem('userName',res.data.name)
                  this.props.navigation.navigate('LandScreen')
                  this.setState({
                    isShow:true
                  })
                }
              ).catch(err =>{
                console.log(err);
              })
              // await AsyncStorage.setItem('userEmail',values.email)
              // await AsyncStorage.setItem('userName',"USER Name")
              // this.props.navigation.navigate('LandScreen')
              // this.setState({
              //   isShow:true
              // })


              }

              }
            >
            {
              ({values,errors,handleChange,handleSubmit}) =>
              (
                <View>
                <Block flex center style={styles.topMargin}>
                    <Text h1 bold italic>GreenLED</Text>
                    <Text p>Sign in to your account</Text>
                </Block>

                <Block flex center>
                    <Input rounded placeholder="Email Address" icon="user" family="EvilIcons"  error={errors.email} value={values.email} onChangeText={handleChange("email")} right style={{marginTop:50}}/>
                    <Input rounded placeholder="Password" error={errors.password} value={values.password} password viewPass right onChangeText={handleChange("password")} />
                </Block>
                <Block flex bottom style={{justifyContent:"flex-end",marginTop:20}}>
                    <Text p italic bold onPress={this.handleForgotPasswordPressed} style={styles.styleTextHover}> Forgot your password ?</Text>
                </Block>
                <Block flex center style={{justifyContent:"center",marginTop:20}}>
                    {errors.email ?<Text p color="red" italic>{errors.email} </Text> : null}
                    {errors.password ?<Text p color="red" italic>{errors.password} </Text> : null}
                </Block>
                <Block flex center space="around" style={{justifyContent:"flex-end"}}>
                  <Button uppercase color="primary" size='large' radius={10} onPress={handleSubmit}> Log In</Button>
                  {/*<Button uppercase color="primary" size='large' radius={10} onPress={this.signInAsync} style={{marginTop:20}}> Google Log In</Button>*/}
                </Block>
                <Block center flex style={{justifyContent:"center"}}>
                  <Text p >Dont have an account? <Text p bold italic style={styles.styleTextHover}
                  onPress={()=> this.props.navigation.navigate('RegisterScreen')}>Sign up </Text></Text>
                </Block>
                </View>
              )
            }

          </Formik>
          {this.state.error && (
            <Toast isShow={this.state.isShow} positionIndicator="center" color="warning">Error while Logging in</Toast>
            )}
      </Block>

    )
  }
}
const styles = StyleSheet.create({
  styleTextHover:{
    color:'rgba(0,0,0,0.4)'
  },
  topMargin:{
    marginTop:50
  },
  root:{
    marginLeft:20,
    marginRight:20
  }
})

export default LogInScreen
