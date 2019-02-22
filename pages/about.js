import React from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';


class About extends React.Component {

   render(){
   return(
   <BaseLayout {...this.props.auth}>
   <BasePage>
    <div className="about-page">
      <h1 className="about">About ToshiText</h1>
      <img className="make-image" src="/static/makeschool.jpg" />

      <p>ToshiText was created at Make School in San Francisco, CA. 
         The goal of the project is to give users to around the world
         the ability to send microtransactions without bank accounts or
         internet access.
      </p>
    </div>
   </BasePage>
</BaseLayout>
  )
 }
}
  
export default About;