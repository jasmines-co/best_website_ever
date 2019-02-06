import React from 'react'

import Header from "../components/shared/Header";


// This is the Link API
import Link from 'next/link';

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
    <div>
     <Header/>
     <img className="logo" src="/static/error_coin.png" alt="logo" />
      <p className="error-page">
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
      </div>
    )
  }
}