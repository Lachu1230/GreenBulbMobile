import React, { Component }  from 'react'
import {View,Image,StyleSheet} from 'react-native';

import { Block,Button,Text,Input,Checkbox,Icon} from 'galio-framework';
import { Card} from 'react-native-elements'


class LandScreen extends React.Component {
    static navigationOptions ={
      title:"Home",
      gesturesEnabled : false,
      headerLeft:null
    }

    handleNext = () =>{
      this.props.navigation.navigate('BulbsDetailsScreen')
    }
    render() {
        return (

            <Block safe center flex>
                <Card style={{flex:1}}>
                    <View>
                    <Image source={require("../../assets/images/carbon.jpg")} resizeMode="cover" style={{width:'100%'}}/>

                    <Text h5 bold style={{marginTop:20}}> Do you wanna know your Average Energy Usage from different bulbs every year?</Text>
                    </View>
                </Card>
                <Block flex center style={{justifyContent:'flex-end'}}>
                      <Button radius={10} uppercase onPress={this.handleNext}>Next</Button>
                </Block>

            </Block>
        )}
}

export default LandScreen
