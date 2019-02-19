import React from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';
import RequestForm from '../components/account/RequestForm';


class Request extends React.Component {

    render(){
    return(
    <BaseLayout {...this.props.auth}>
    <BasePage>
    <div>Request</div>
    <RequestForm />
    </BasePage>
    </BaseLayout>
  )
 }
}
  
export default Request;