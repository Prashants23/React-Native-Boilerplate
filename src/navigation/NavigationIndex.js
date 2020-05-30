import React from 'react'
import {Scene, Router, Stack} from 'react-native-router-flux'
import {View, Text, StyleSheet, BackHandler} from 'react-native'
import Home from '../components/scenes/home'

class Navigator extends React.component{



    render()
    {
        return(<Router>
            <Stack>
                <Scene title="Home"
                key={"Home"}
                component={Home}/>
            </Stack>
        </Router>)
    }
}

export default Navigator;