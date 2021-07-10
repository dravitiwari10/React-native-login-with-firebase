import React, {Component} from 'react'
import firebase from 'firebase';
import {View , StyleSheet, ImageBackground} from 'react-native'
import LoginForm from './LoginForm';
import Articles from './Articles';
// import BG from '../images/backimage'
import Loading from './Loading'

class App extends Component {
  state = {
    loggedIn:false
  }

componentDidMount(){
  var firebaseConfig = {
    apiKey: "AIzaSyCQV8jS7gFwksrnInY18vDtd2_jykzzR5I",
    authDomain: "fir-rn-3b77f.firebaseapp.com",
    projectId: "fir-rn-3b77f",
    storageBucket: "fir-rn-3b77f.appspot.com",
    messagingSenderId: "943039879149",
    appId: "1:943039879149:web:1b1d9e64801d2daf74f9e4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  firebase.auth().onAuthStateChanged(user => {
       if(user){
          this.setState({
            loggedIn:true
          })
       }else{
         this.setState({
           loggedIn:false
         })
       }
  })
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

  renderContent = () =>{
    switch(this.state.loggedIn){
      case false:
        return <ImageBackground style={styles.container} source={{uri:'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}} >
                  <LoginForm/>
               </ImageBackground>
      case true:
           return <Articles/>

           default:
             return <Loading/>


    }
  }

  render(){
    return (
      <View style={styles.container}>
       {this.renderContent()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height:'100%',
    width:'100%'
 
  
  },
});



export default App;