import React from 'react';
import Header from "../components/shared/Header";
import auth0Client from '../services/auth0';
import { withRouter } from 'next/router'


export default class Callback extends React.Component {
    async componentDidMount(){
       await auth0Client.handleAuthentication();
    //    this.props.router.push('/');
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