import React, { Component }  from 'react'
import {View,Image,FlatList,StyleSheet,SafeAreaView} from 'react-native';

import { Block,Button,Text,Input,Checkbox,Icon} from 'galio-framework';
//import { Input } from 'react-native-elements';
import { ListItem} from 'react-native-elements'
import { Formik } from "formik";
import axios from 'axios'
import config from '../../constants/Config'
class BulbsDetailsScreen extends React.Component {

    static navigationOptions = {
      title:' Bulbs Details '
    }

    constructor(props){
      super(props)
      this.state = {
        means: [{name:'Incandescent'},{name:'Halogen'},{name:'CFL'},{name:'LED'}],
        meansWatts: [{name:'IncandescentWatts'},{name:'HalogenWatts'},{name:'CFLWatts'},{name:'LEDWatts'}],
        
        meansVal : [0,0,0,0]
      }
    }

    handleNext = (info) =>{
      console.log(info);
      this.props.navigation.navigate('UsageDisplayScreen',{
        energy_usage : info.energy_usage
      })
    }

    componentDidMount(){
      console.log(this.state.means);
    }


    render() {
        return (
          <Formik
            initialValues={{Incandescent:"0",IncandescentWatts:"0",Halogen:"0",HalogenWatts:"0",CFL:"0",CFLWatts:"0",LED:"0",LEDWatts:"0",Average:"0"}}
            validate = {values => {
              let errors = {}

              return errors
            }}
            onSubmit={ async (values) => {
                console.log("Mean submitted");
                console.log(values.Car);
                console.log(values.Bus);
                axios.post(config.api_url+"/getEnergyUsage",{
                  "Incandescent": values.Incandescent,
                  "IncandescentWatts" : values.IncandescentWatts,
                  "Halogen" : values.Halogen,
                  "HalogenWatts" : values.HalogenWatts,
                  "CFL" : values.CFL,
                  "CFLWatts" : values.CFLWatts,
                  "LED" : values.LED,
                  "LEDWatts" : values.LEDWatts,
                  "Average" : values.Average
                }).then( (res) => {

                    console.log(res.data['energy_usage']);
                    this.handleNext(res.data)
                }).catch(err => {
                  console.log(err);
                })

              }
            }
          >

          {

            ({values,errors,handleChange,handleSubmit}) =>
            (
              <SafeAreaView style={{flex:1}}>
                  <Block flex center style={{marginLeft:20,marginRight:20}}>
                      <Block flex center style={{justifyContent:'center'}} >
                        <Text h4 bold>Bulb Details</Text>
                      </Block>
                      <Block>
                      <Text h5 bold>   No of Bulbs   Wattage</Text>
                        </Block>
                      
                      <Block flex={2} center >
                          {this.state.means.map ( (item,i) => (
                            <Block row key={i}>
                                <Text p italic style={styles.styleText}>{item.name} </Text>
                                <Input style= {{width:100}} placeholder="No of Bulbs" rounded value={values[this.state.means[i].name]} onChangeText={handleChange(this.state.means[i].name)}/>
                                <Input style= {{width:100}} placeholder="Wattage" rounded value={values[this.state.meansWatts[i].name]} onChangeText={handleChange(this.state.meansWatts[i].name)}/>   
                            </Block>
                            
                          ))}
                      </Block>
                      <Block flex={1}>
                      <Input style= {{width:250}} placeholder="Average Daily Usage Hours" rounded value={values.average} onChangeText={handleChange('Average')}/>
                      </Block>
                      <Block flex center style={{justifyContent:'center'}}>

                            <Button radius={10} uppercase onPress={handleSubmit}>Next</Button>
                      </Block>
                    </Block>
              </SafeAreaView>
            )
          }
          </Formik>

        )}

}

const styles = StyleSheet.create({
    styleText:{
      backgroundColor:'#8BC34A',
      flexGrow:1,
      textAlign:'center',
      paddingTop:20,
      paddingBottom:20,
      marginRight:10
    }
})

export default BulbsDetailsScreen
