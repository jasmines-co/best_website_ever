
import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user } = props;
  // const headerType = props.headerType || 'default';
  const title = props.title || 'ToshiText';
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        {/* <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
        {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>} */}
      </Head>
      <div className="layout-container" >
      <Header isAuthenticated={isAuthenticated} user={user}/>
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default BaseLayout;