'use strict';
var React = require('react-native');
var Dimensions = require('Dimensions');
var Settings = require('./Settings');
var window = Dimensions.get('window');
var {
    AppRegistry, StyleSheet, Text, View, TouchableHighlight, TouchableWithoutFeedback, LayoutAnimation, Animated, Navigator} = React;

var Main = React.createClass({
    getInitialState: function() {
        return {
            menu: {
                right: -150
            },
             fadeAnim: {
                 opacity: new Animated.Value(0)
             }
        };
    },
    goToSettings: function() {
        this.props.navigator.push({
        sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
        component: Settings,
        title: 'Settings'
        });
    },
    toggleSideBar: function() {
        LayoutAnimation.configureNext(
            {
                duration: 200,
                create: {
                    type: "easeInEaseOut"
                },
                update: {
                    type: "easeInEaseOut"
                }
        });

        var wrapperOverlayOpacity = 0.8;
        var sidebarRight = 0;
        if (this.state.menu.right > -150) {
            wrapperOverlayOpacity = 0;
            sidebarRight = -150;
        }

        this.setState({
            menu: {
                right: sidebarRight
            }
        });

        Animated.timing(this.state.fadeAnim.opacity, {toValue: wrapperOverlayOpacity}).start();
    },
    render: function() {
        var sidebarStyle = [styles.sidebar, this.state.menu];
        var wrapperStyle = [styles.wrapper, this.state.fadeAnim];
        return (
            <View>
                <View style={styles.container}>
                    <TouchableHighlight style={styles.button} onPress={this.toggleSideBar.bind(this)}>
                        <View></View>
                    </TouchableHighlight>
                    <Text style={styles.welcome}>
                        Content
                    </Text>
                </View>
                <TouchableWithoutFeedback onPress={this.toggleSideBar.bind(this)}>
                    <Animated.View style={wrapperStyle}>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <View style={sidebarStyle}>
                    <TouchableWithoutFeedback onPress={this.goToSettings.bind(this)}>
                        <Text style={styles.welcome}>sidebar</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#000',
        width: window.width,
        height: window.height,
        position: 'absolute',
        top: 0,
        left: 0
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        position: 'absolute',
        width: window.width,
        height: window.height,
        left: 0
    },
    sidebar: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        right: -150,
        position: 'absolute',
        height: window.height,
        backgroundColor: '#FFF'
    },
    button: {
        width: 20,
        height: 20,
        backgroundColor: 'black',
        position: 'absolute',
        top: 30,
        right: 20
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

module.exports = Main;
