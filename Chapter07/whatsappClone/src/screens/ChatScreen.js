import React from 'react';
import { getMessages, postMessage } from '../services/api';
import { View, ImageBackground, KeyboardAvoidingView, Platform, Text, StyleSheet, Button, FlatList } from 'react-native';
import Message from '../components/Message';
import Compose from '../components/Compose';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

class ChatScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.name}`
    })

    keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0

    
    // componentDidMount() {
    //     this.unsubscribeGetMessages = getMessages((snapshot) => {
    //         this.setState({
    //             messages: Object.values(snapshot.val())
    //         })
    //     })
    // }
    // componentWillUnmount() {
    //     this.unsubscribeGetMessages();
    // }

    render() {
        console.log(this.props)
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
                    <Compose submit={this.props.addMessage} />
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        klepages: state.messages
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addMessage: (message) => {
            dispatch(addMessage(message));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);

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