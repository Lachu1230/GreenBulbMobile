import React, { Component }  from 'react'
import {View ,SafeAreaView,KeyboardAvoidingView,FlatList,StyleSheet,TouchableHighlight,AsyncStorage} from 'react-native';

import { Block,Button,Text,Input,Checkbox } from 'galio-framework';
import { Formik } from "formik";
import axios from 'axios'
import config from '../../constants/Config'
class RegisterScreen extends Component
{


  static navigationOptions ={
    title:"Register"
  }

  constructor(props){
      super(props)
      this.state = {
        checkboxInitalValue : false
      }
  }

  handleChecked = () => {
    this.setState(
      {
        checkboxInitalValue: !this.state.checkboxInitalValue
    })
  }

  render(){
    const {checkboxInitalValue} = this.state
    return (
      <Block safe flex style={styles.root}>
          <Formik
              initialValues={{username:"", email:"",password:"",checked:false }}
              validate={ values =>{
                let errors = {};
                if (values.username === ""){
                  errors.username = "Please enter a username."
                }
                if (values.email === "") {
                  errors.email = "Please enter an email address.";
                }
                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                  errors.email = "Invalid Email"
                }
                if (values.password === "") {
                  errors.password = "Please enter a password.";
                }
                // if (!values.checked){
                //   errors.checked = false
                // }
                console.log(errors);
                return errors;
              }}

              onSubmit={ async (values) => {
                console.log(values.username);
                // try{
                //   await AsyncStorage.setItem('userEmail',values.email)
                //   await AsyncStorage.setItem('userName',values.username)
                // }catch (error){
                //   console.log(error);
                // }
                axios.post(config.api_url+"/register",{
                  "name":values.username,
                  "password":values.password,
                  "email":values.email

                }).then( async (res) => {

                  await AsyncStorage.setItem('userEmail',values.email)
                  await AsyncStorage.setItem('userName',values.username)

                  this.props.navigation.navigate('LandScreen')
                }
              ).catch(err =>{
                console.log(err);
              })

                // this.props.navigation.navigate('LandScreen')
              }

              }
            >
            {
              ({values,errors,handleChange, handleSubmit}) =>
              (
                <View style={{flex:1}}>
                <Block flex center style={styles.topMargin}>
                    <Text h4>Register for your account</Text>
                </Block>
                <Block flex center>
                    <Input rounded placeholder="User Name" icon="user" family="EvilIcons" right value={values.username} error={errors.username} onChangeText={handleChange("username")} style={{marginTop:50}}/>
                </Block>
                <Block flex center>
                    <Input rounded placeholder="Email Address" icon="email" family="MaterialIcons" value={values.email} error={errors.email} onChangeText={handleChange("email")} style={{marginTop:-20}} right/>
                    <Input rounded placeholder="Password" password viewPass value={values.password} error={errors.password} onChangeText={handleChange("password")} right style={{marginTop:10}}/>
                </Block>

                <Block flex left style={{justifyContent:'center'}}>
                    <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        value={this.checked}
                        label="I read and agree to Terms & Conditions"
                        style={{alignSelf:'flex-start',marginTop:20}}
                        onValueChange={handleChange('checked')}
                      />
                </Block>

                <Block center flex style={{justifyContent:"center"}}>
                <Button uppercase color="primary" size='large' radius={10} onPress={handleSubmit}> Sign UP</Button>
                  <Text p >Already have an account? <Text p bold style={styles.styleTextHover}
                  onPress={()=> this.props.navigation.navigate('LoginScreen')}>Sign In </Text></Text>
                </Block>
                </View>
              )
            }

          </Formik>
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

export default RegisterScreen
