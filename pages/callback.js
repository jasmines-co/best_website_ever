import React from 'react';
import Header from "../components/shared/Header";
import BasePage from "../components/BasePage";
import auth0Client from '../services/auth0';
import { withRouter }  from 'next/router';


class Callback extends React.Component {

    async componentDidMount(){
       await auth0Client.handleAuthentication();
       this.props.router.push('/about')
    }

    render(){
        return(  
     <BasePage>
        <div>
            <Header />
            <h1>You are logged in</h1> 
          </div> 
        </BasePage>
        )
       }
    }

    export default withRouter(Callback);