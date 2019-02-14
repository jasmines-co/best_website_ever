import React from 'react'

import BasePage from '../components/BasePage';

import BaseLayout from '../components/layouts/BaseLayout';


export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
  <BaseLayout {...this.props.auth}>
  <BasePage>
    <div>
     <img className="logo" src="/static/error_coin.png" alt="logo" />
      <p className="error-page">
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
      </div>
    </BasePage>
  </BaseLayout>
    )
  }
}