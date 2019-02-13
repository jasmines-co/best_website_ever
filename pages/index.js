import React from 'react';
import Header from "../components/shared/Header";


// This is the Link API
import Link from 'next/link';
import BasePage from '../components/BasePage';

const Index = () => (
    <div>
      <Header />
      <img className="logo" src="/static/dark-logo.png" alt="logo" />
      <p className='tagline'>Bitcoin Cash at your Fingertips</p>
    </div>
  )
  
  export default Index;
