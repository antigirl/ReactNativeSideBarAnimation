var React = require('react-native');

var {
    View, Text, StyleSheet, Navigator, TouchableWithoutFeedback} = React;

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#48BBEC'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    }
});

var Settings = React.createClass({
    goBack: function () {
        this.props.navigator.pop();
    },
    render: function() {
        return (
            <View style={styles.mainContainer}>
                <TouchableWithoutFeedback onPress={this.goBack.bind(this)}>
                    <Text style={styles.title}>SETTINGS</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
});

module.exports = Settings;
