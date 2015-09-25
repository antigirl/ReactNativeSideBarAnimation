'use strict';

var React = require('react-native');
var Main = require('./components/Main');
var Settings = require('./components/Settings');

var {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} = React;


var Index = React.createClass({
    renderScene: function (route, navigator) {
        switch (route.name) {
            case 'index':
            return <Main navigator={navigator}/>
            break;

            case 'settings':
            return <Settings navigator={navigator}/>
            break;
        }
    },
    configureScene: function(route) {
        if (route.sceneConfig) {
          return route.sceneConfig;
        }
    },
    render: function() {
        return (
            <Navigator
            initialRoute={{name: 'index'}}
            renderScene={this.renderScene}
            configureScene={this.configureScene}
            />
        );
    }
});

AppRegistry.registerComponent('listView', () => Index);
