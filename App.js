import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    return <WebView source={{ uri: 'http://165.227.202.8:3000/' }} style={{ marginTop: 20 }} />;
  }
}