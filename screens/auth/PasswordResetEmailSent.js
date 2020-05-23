import React, { Component }  from 'react'
import {View ,SafeAreaView,KeyboardAvoidingView,FlatList,StyleSheet,TouchableHighlight} from 'react-native';

import { Block,Button,Text,Input,Icon } from 'galio-framework';

class PasswordResetEmailSent extends React.Component {
    static navigationOptions ={
      title: "Password Reset Email",
      gesturesEnabled: false,
      header:null
    }

    handlePressed = () =>{
      this.props.navigation.navigate('LoginScreen')
    }
    render() {
        return (

            <Block safe flex center style={styles.root}>
                <Block flex center style={styles.topMargin}>
                    <Text h4 > Password Reset </Text>

                    <Block center card fluid style={{borderRadius:'100%', borderWidth:3,borderColor:'green'}}>
                        <Text icon="check" family="Entypo" h3 style={{padding:50}}><Icon name="check" family="Entypo" size={50} />
                        Success </Text>
                    </Block>

                </Block>

                <Block flex center style={{justifyContent:'flex-end'}}>
                    <Button uppercase radius={10} onPress={this.handlePressed}>Go Back to Log In </Button>
                </Block>
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

export default PasswordResetEmailSent
