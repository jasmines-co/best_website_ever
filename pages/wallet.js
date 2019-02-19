import React from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';


class Wallet extends React.Component {

    render(){
    return(
    <BaseLayout {...this.props.auth}>
    <BasePage>
        <div>
            <h1 className="text">Wallet</h1>
            <h2 className="text">Wallet Address: </h2>
            <h2 className="text">Balance: </h2>
            <h2 className="text">Recent Requests: </h2>
        </div>
    </BasePage>
    </BaseLayout>
  )
 }
}
  
export default Wallet;