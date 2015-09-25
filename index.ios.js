'use strict';

var React = require('react-native');
var Main = require('./components/Main');

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

var styles = StyleSheet.create({
  container:{
    flex: 1
  },
});

var Index = React.createClass({
    render: function() {
        return (
            <NavigatorIOS
                style={styles.container}
                navigationBarHidden={true}
                initialRoute={{
                component: Main,
                title: 'main'
            }}
            />
        );
    }
});

AppRegistry.registerComponent('listView', () => Index);
