import React from 'react';
import {View,ScrollView,SafeAreaView,Dimensions,KeyboardAvoidingView,Button} from 'react-native'
import MapView from 'react-native-maps';
import { Block,Text,Input} from 'galio-framework';

export default class TrackingMapView extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>

      <MapView style={{flex: 8}}
      initialRegion={{
          latitude: -37.80831,
          longitude: 144.96399,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        >
        <MapView.Marker
          coordinate={{latitude: -37.80831,
                   longitude: 144.96399}}
          title="RMIT"
       />



        </MapView>

        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>

           <Input placeholder="Destination address" style={{flexGrow:1,flex:1}}/>

           <Button
          title="Search"
          onPress={() => {

          }}
          style={{backgroundColor:"cyan",borderWidth:2,borderColor:'black'}}
        />
        </View>
        </View>

    );
  }
}
