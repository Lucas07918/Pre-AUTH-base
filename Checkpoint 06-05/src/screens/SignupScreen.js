import React, {useContext, useState} from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image, Button, StyleSheet } from "react-native";

import  AntDesign  from "react-native-vector-icons/AntDesign";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
// import { AuthContext } from "../navigation/AuthProvider";

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    // const {register} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Create a account</Text>
            <FormInput 
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput 
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormInput 
                labelValue={confirmPassword}
                onChangeText={(userConfirmPassword) => setConfirmPassword(userConfirmPassword)}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton 
                buttonTitle="Sign Up"
                onPress={() => register(email, password)}
            />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our</Text>
                <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Terms of service</Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Privacy Policy</Text>
            </View>

            <SocialButton 
                buttonTitle="Sign Up With Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => {}}
            />

            <SocialButton 
                buttonTitle="Sign Up With Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => {}}
            />

            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>have an acount? Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f'
    },
    navButton: {
        marginTop: 15
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center'
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey'
    }
})