import React from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';
import AccountForm from '../components/account/AccountForm'


class AccountNew extends React.Component {

   render(){
   return(
   <BaseLayout {...this.props.auth}>
   <BasePage>
    <div className="account-new">
      <AccountForm />
    </div>
   </BasePage>
</BaseLayout>
  )
 }
}
  
export default AccountNew;