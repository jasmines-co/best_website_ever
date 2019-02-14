import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';



class Index extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const { isAuthenticated, user } = this.props.auth;
    return(
    <BaseLayout {...this.props.auth}>
    <div>
    <h1 className="welcome"> { isAuthenticated && <span>{user.name}</span>}</h1>
      <img className="logo" src="/static/dark-logo.png" alt="logo" />
      <p className='tagline'>Bitcoin Cash at your Fingertips</p>
    </div>
  </BaseLayout>
  )
 }
}
  export default Index;
