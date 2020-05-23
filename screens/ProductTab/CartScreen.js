import React, {Component} from 'react'
import {passports} from '../ProductTab/product'

import {View,ScrollView,SafeAreaView,AsyncStorage} from 'react-native'
import { Block,Button,Text,Input} from 'galio-framework';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
class CartScreen extends Component{

    static navigationOptions = {
      title:"Shopping Cart"
    }

    state = {
          carts :[]
    }

    async componentDidMount(){
      let item = await AsyncStorage.getItem("Carts")
        const carts = JSON.parse(item)

      this.setState({
        carts: carts
      })
      console.log("In the SHopping Cart");
      console.log(carts);
    }



    render(){

      return (
          <SafeAreaView style={{flex:1}}>
          <ScrollView>

          {this.state.carts.map((item) => (
            <Card>
            <CardImage
              source={{uri: item.image}}

            />
            <CardTitle
              title={item.name}
            />
                <Text style={{font:30}}> Type: </Text>
            <CardContent text={item.type} />
                <Text> Price: $</Text>
            <CardContent text={item.price} />
                <Text> Number of products: </Text>
            <CardContent text="4" />
            <CardAction
              separator={true}
              inColumn={false}>
              <CardButton
                onPress={()=>this.props.navigation.navigate("ProductDescScreen")}
                title="Pay "
                color="#FEB557"
              />

            </CardAction>
            </Card>
          ))}

                </ScrollView>

          </SafeAreaView>
      )
    }


}

export default CartScreen
