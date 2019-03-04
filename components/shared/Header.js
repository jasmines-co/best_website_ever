

import React from 'react';
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

import auth0 from '../../services/auth0';

const Login = () => {
  return (
    <span onClick={auth0.login} className ="nav-link port-navbar-link clickable"> Login</span>
  )
}

const Logout = () => {
  return (
    <span onClick={auth0.logout} className ="nav-link port-navbar-link clickable"> Logout</span>
  )
}


export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isAuthenticated, user } = this.props;
    return (
      <div>
        <Navbar className="port-navbar port-default" color="dark" light expand="md">
          <NavbarBrand className="brand" href="/">ToshiText</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/team">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://twilio-toshi.herokuapp.com/sessions/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://twilio-toshi.herokuapp.com/users/new">Signup</NavLink>
              </NavItem>
              { isAuthenticated &&
              <NavItem>
               <NavLink href="https://twilio-toshi.herokuapp.com/users/new">Request</NavLink>
              </NavItem>
              }
              { isAuthenticated &&
              <NavItem>
                <Logout />
              </NavItem>
              }
  
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}