import React from 'react'
import Home from '../components/scenes/home'
import { connect } from "react-redux";
import {bindActionCreators} from 'redux'


// class HomeContainer extends React.Component{
//     render(){
//         return(

//         )
//     }
// }

const mapStateToProps=(state)=>{// for reducer states
    // const {}
    return {
        state
    }
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        getFunction,
    });
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Home)