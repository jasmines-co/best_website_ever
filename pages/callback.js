import React from 'react';
import Header from "../components/shared/Header";
import auth0Client from '../services/auth0';


export default class Callback extends React.Component {
    componentDidMount(){
        auth0Client.handleAuthentication();
    }

    render(){
        return(  
        <div>
            <Header />
            <h1>You are logged in</h1> 
          </div> 
        )
        }
    }