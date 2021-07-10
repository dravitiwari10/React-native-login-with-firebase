//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';


// create a component
const Logo = () => {
    return (
        <View>
            <Image source={{uri:'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}} style={{height:150, width:150}} />
        </View>
    );
};


//make this component available to the app
export default Logo;