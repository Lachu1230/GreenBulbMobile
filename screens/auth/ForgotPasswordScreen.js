import React, { Component }  from 'react'
import {View ,SafeAreaView,KeyboardAvoidingView,FlatList,StyleSheet,TouchableHighlight} from 'react-native';

import { Block,Button,Text,Input,Checkbox } from 'galio-framework';
import { Formik } from "formik";

class ForgotPasswordScreen extends React.Component {
    static navigationOptions ={
      title: "Forgot Password"
    }

    handlePressed = () =>{
      this.props.navigation.navigate('PasswordResetEmailSent')
    }
    render() {
        return (

            <Block safe flex center style={styles.root}>
              <Formik
                  initialValues={{email: ""}}
                  validate = { values => {
                    let errors = {}
                      if (values.email === "") {
                        errors.email = "Please enter an email address.";
                      }
                      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                        errors.email = "Invalid Email"
                      }
                      return errors;
                  }}
                  onSubmit = {values =>{
                    console.log(values.email);
                    console.log("submitted");
                    this.handlePressed()
                  }}
                >
                {
                  ({values,errors,handleChange,handleSubmit}) => (
                  <View>
                    <Block flex center style={styles.topMargin}>
                        <Text h4 > Forgot Password </Text>
                        <Text p style={styles.topMargin}> Please enter your email address</Text>
                        <Input rounded placeholder="Email Address" icon="email" error={errors.email} value={values.email} family="MaterialIcons" onChangeText={handleChange("email")} right/>
                        {errors.email ?<Text p color="red" italic>{errors.email} </Text> : null}
                    </Block>

                    <Block flex center style={{justifyContent:'center'}}>
                        <Button uppercase radius={10} onPress={handleSubmit} >Reset password </Button>
                    </Block>
                  </View>
              )
              }
              </Formik>
            </Block>

        )}

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

export default ForgotPasswordScreen
