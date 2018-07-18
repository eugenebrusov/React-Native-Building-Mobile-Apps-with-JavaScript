import React from 'react';
import { postMessageToServer, subscribeToGetMessagesFromServer, unsubscribeToGetMessagesFromServer } from '../actions';
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, FlatList } from 'react-native';
import Message from '../components/Message';
import Compose from '../components/Compose';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

class ChatScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.name}`
    })

    keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0

    componentDidMount() {
        this.props.subscribeToGetMessagesFromServer();
    }

    componentWillUnmount() {
        this.props.unsubscribeToGetMessagesFromServer();
    }

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../assets/imgs/background.png')}>
                <KeyboardAvoidingView behavior="padding"
                    keyboardVerticalOffset={this.keyboardVerticalOffset}
                    style={styles.container}>
                    <FlatList
                        style={styles.container}
                        data={this.props.klepages}
                        renderItem={Message}
                        keyExtractor={(item, index) => (`message-${index}`)}
                    />
                    <Compose submit={ this.props.postMessageToServer } />
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

function mapStateToProps(state) {
    return {
        klepages: state.messages
    };
}

export default connect(mapStateToProps, { postMessageToServer, subscribeToGetMessagesFromServer, unsubscribeToGetMessagesFromServer })(ChatScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    listItem: {
        width: '70%',
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderColor: '#979797',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10
    },
    incomingMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#E1FFC7'
    } 
})