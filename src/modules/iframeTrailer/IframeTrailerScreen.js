import React from 'react';
import { View, WebView } from 'react-native';

const IframeTrailerScreen = ({ trailerId }) => (
  <View style={{ flex: 1 }}>
    <WebView
      style={{ flex: 1 }}
      javaScriptEnabled
      source={{ uri: `http://www.youtube.com/embed/${trailerId}` }}
    />
  </View>
);

export default IframeTrailerScreen;
