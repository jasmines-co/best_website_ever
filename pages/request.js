import React from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';
import RequestForm from '../components/account/RequestForm';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';


class Request extends React.Component {

    render(){
    return(
    <BaseLayout {...this.props.auth}>
    <BasePage>
    <NavItem>
      <NavLink href="https://twilio-toshi.herokuapp.com/users/new">Login/SignUp</NavLink>
    </NavItem>
    </BasePage>
    </BaseLayout>
  )
 }
}
  
export default Request;