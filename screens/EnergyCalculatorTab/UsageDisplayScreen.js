import React, { Component }  from 'react'
import {View,Image,FlatList,StyleSheet} from 'react-native';

import { Block,Button,Text,Input,Checkbox,Icon} from 'galio-framework';
import { ListItem} from 'react-native-elements'


class UsageDisplayScreen extends React.Component {
    static navigationOptions = {
      title:'Total Energy Usage '
    }
    state = {
      passedInfo : this.props.navigation.state.params.energy_usage
    }
    render() {
        return (

            <Block flex center style={{marginLeft:20,marginRight:20}}>
              <Block flex center style={{justifyContent:'center',textAlign:'center'}} >
                <Text h4 bold>Your Average Energy Usage from different bulbs are {this.state.passedInfo} Watts/Year</Text>
              </Block>
              <Block flex center>
                    <Text p italic>Want to see how our products can make a difference?</Text>
                    <Button style={{marginTop:20}} onPress={()=>this.props.navigation.navigate('Main')}>Next</Button>
              </Block>
            </Block>
        )}
}

export default UsageDisplayScreen
