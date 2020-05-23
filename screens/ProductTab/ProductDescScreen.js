import React, { Component } from 'react';
import { WebView } from 'react-native-webview';


class ProductDescScreen extends Component {
    static navigationOptions = {
        title:"External website"
    }
    render() {
        return (
            <WebView source={{ uri: 'https://www.amazon.com/s?k=led+bulbs&ref=nb_sb_noss' }} />
        );
    }
}
export default ProductDescScreen