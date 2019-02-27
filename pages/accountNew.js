import React from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';
import AccountForm from '../components/account/AccountForm';


import { createAccount } from '../actions';
import { userInfo } from 'os';

class AccountNew extends React.Component {

  constructor(props){
    super();
    this.saveAccount = this.saveAccount.bind(this);
  }
  saveAccount(accountData) {
    createAccount(accountData).then((account) =>{
      console.log(account);
    }).catch((err) => {
      console.log(err)
    })
  }

  renderSecretPage() {
    const { isAuthenticated } = this.props;

    if (isAuthenticated){
      return(
        <BaseLayout {...this.props.auth}>
        <BasePage>
        <div>
            <link>https://twilio-toshi.herokuapp.com/</link>
        </div>
        </BasePage>
     </BaseLayout>
      )
    } else {
      return (
      <BaseLayout {...this.props.auth}>
      <BasePage>
       <div className="account-new">
         <h1>You must login/create an account</h1>
       </div>
      </BasePage>
   </BaseLayout>
      )
    }
  }

   render(){
    return this.renderSecretPage()
   }
}
  
export default AccountNew;