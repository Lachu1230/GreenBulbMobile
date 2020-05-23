import React, {Component} from 'react'
import {passports} from '../ProductTab/product'

import {View,ScrollView,SafeAreaView,AsyncStorage} from 'react-native'
import { Block,Button,Text,Input} from 'galio-framework';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import axios from 'axios'
import config from '../../constants/Config'
import { Formik } from "formik";

class ProductListScreen extends Component{

    static navigationOptions = {
      title:"Product List"
    }

    state = {
          passports : []
    }

    componentDidMount(){
      console.log(this.state.passports);

    }
    async componentWillMount(){
      axios.get(config.api_url+"/getAllProducts")
      .then( (res) =>{
          this.setState({
            passports : res.data.products
          })
      })
      .catch (err =>{
        console.log(err);
      })
      console.log("dsd");
    }

    addToCartPressed = (item)=> {
      console.log("ADD to cart");
      console.log(item);
      let carts = []

      carts.push(item)
      AsyncStorage.setItem("Carts",JSON.stringify(carts))

    }

    render(){

      return (
          <SafeAreaView style={{flex:1}}>
          <ScrollView>

          {this.state.passports.map((item,i) => (
            <Card key={i}>
            <CardImage
              source={{uri: item.image_src}}

            />
            <CardTitle
              title={item.name}
            />
                <Text h5> Type: </Text>
            <CardContent text={item.type} />
                <Text h5> Price: $</Text>
            <CardContent text={item.price} />
                <Text h5> Wattage: </Text>
            <CardContent text={item.wattage} />
                <Text h5> Hours of Usage : </Text>
                <CardContent text={item.usage} />
                <Text h5> Description : </Text>
                <CardContent text={item.desc} />
            <CardAction
              separator={true}
              inColumn={false}>
              <CardButton
                onPress={() => {}}
                title="Buy "
                color="#FEB557"
              />
              <CardButton
                onPress={ () => {this.addToCartPressed(item) } }
                title="Add to Cart "
                color="#4CAF50"
              />
            </CardAction>
            </Card>
          ))}

                </ScrollView>
          </SafeAreaView>
      )
    }

}

export default ProductListScreen
