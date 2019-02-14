import React from 'react';
import Header from "../components/shared/Header";
import BasePage from "../components/BasePage";
import auth0Client from '../services/auth0';
import { withRouter }  from 'next/router';
import BaseLayout from "../components/layouts/BaseLayout";


class Callback extends React.Component {

    async componentDidMount(){
       await auth0Client.handleAuthentication();
       this.props.router.push('/')
    }

    render(){
        return( 
    <BaseLayout>
     <BasePage>
        <div>
            <h1>You are logged in</h1> 
          </div> 
        </BasePage>
      </BaseLayout>
        )
       }
    }

    export default withRouter(Callback);