import React, {Component} from 'react'
import {passports} from '../ProductTab/product'

import {View,ScrollView,SafeAreaView,Dimensions,AsyncStorage} from 'react-native'
import { Block,Button,Text,Input} from 'galio-framework';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import Carousel from 'react-native-snap-carousel';

class ProductPassport extends Component{

    static navigationOptions = {
      title:"Product Passport"
    }

    state = {
          passports : passports,
          width: Math.round(Dimensions.get('window').width),
          height: Math.round(Dimensions.get('window').height),
          carts : []
    }

    async componentWillMount(){
        let carts = await AsyncStorage.getItem('Carts')
        this.setState({
          carts : carts
        })
        console.log("Will mount");
    }
    componentDidMount(){
        console.log("Did mount");
    }

    _renderItem = ({item,index}) => {


        return (

            <Card >
            <CardImage
              source={{uri: item.image_src}}
            />

            <View style={{paddingLeft:20,paddingRight:20}}>
                <Text h3 italic style={{marginTop:150}}>{item.name} </Text>
                <Text h5 style={{marginTop:50}}>{item.type} </Text>
                
            </View>
            <CardAction
              separator={true}
              inColumn={false}>
              <CardButton
                onPress={() => {this.props.navigation.navigate('TrackingMapView')}}
                title="Track my journey"
                color="#4CAF50"
              />
            </CardAction>
            </Card>

        )
    }

    render(){
    
      return (
          <SafeAreaView style={{flex:1}}>
          <Carousel
              layout={'default'}
              data={this.state.passports.products}
              renderItem={this._renderItem}
              sliderWidth={this.state.width}
              itemWidth={this.state.width}
            />




          </SafeAreaView>
      )
    }

}

export default ProductPassport
