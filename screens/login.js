import React, {useState} from 'react';
import {
    ScrollView,
    View,
    KeyboardAvoidingView,
    StyleSheet,
    Button
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Input from '../components/Input';
import Card from "../components/Card";

const Login = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const emailHandle = inputText => {
        setEmail(inputText)
    }
    const passwordHandle = inputText => {
        setPassword(inputText)
    }

    const login = () => {
        props.onLogin({email, password})
    }


    return (<KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={50}
        style={styles.screen}
    >
        <LinearGradient colors={['#253fdc', '#ffe3ff']} style={styles.gradient}>
            <Card style={styles.authContainer}>
                <ScrollView>
                    <Input
                        id="email"
                        label="E-Mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText ={emailHandle}
                    />
                    <Input
                        id="password"
                        label="Password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText ={passwordHandle}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Login" onPress={() => {}} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Switch to Sign Up"
                            onPress={login}
                        />
                    </View>
                </ScrollView>
            </Card>
        </LinearGradient>
    </KeyboardAvoidingView>);
}

Login.navigationOptions = {
    headerTitle: 'Login'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    authContainer: {
        width: '80%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 20
    },
    buttonContainer: {
        marginTop: 10
    }
});

export default Login;
