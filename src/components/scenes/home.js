import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Width, Height} from '../../utils/index';
const styles=StyleSheet.create({
    mainContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:Height,
        width:Width,
    }
})



class Home extends React.Component{

    render(){
        return(<View style={styles.mainContainer}><Text>Here we go again!</Text></View>)
    }
}

export default Home