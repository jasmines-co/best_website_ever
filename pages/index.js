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
      <img className="logo" src="/static/dark-logo.png" alt="logo" />
      <p className='tagline'>Bitcoin Cash at your Fingertips</p>
    </div>
    <div>

  <section className="content-section bg-light" id="about">
    <div className="container-box">      
          <section className='child-container'>
          <h2 className="right-text">Send Your Friends and Family Money in Seconds!</h2>
          </section>
          <section className='child-container'>
          <img className="money" src="/static/sending-money.png" />
          </section>    
    </div>
  </section>

  
  <section className="content-section bg-primary text-white text-center" id="services">


    <div className="container">


      <div className="content-section-heading">
        <h2 className="text-secondary mb-0">Services</h2>
      </div>

      <div className="row">


        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
          <span className="service-icon rounded-circle mx-auto mb-3">
          <img src="static/phone.png" />
          </span>
          <h4>
            <strong>Mobile</strong>
          </h4>
          <p className="text-faded mb-0">Conduct the entire transaction via a phone</p>
        </div>


        <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
          <span className="service-icon rounded-circle mx-auto mb-3">
            <img src="/static/register.png"/>
          </span>
          <h4>
            <strong>Purchase Blockchain</strong>
          </h4>
          <p className="text-faded mb-0">No need for Coinbase
            <i className="fas fa-heart"></i>
      </p>
        </div>


        <div className="col-lg-3 col-md-6">
          <span className="service-icon rounded-circle mx-auto mb-3">
            <img src="static/piggy.png" />
          </span>
          <h4>
            <strong>Low Fees</strong>
          </h4>
          <p className="text-faded mb-0">Cheaper than Western Union</p>
        </div>

        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
          <span className="service-icon rounded-circle mx-auto mb-3">
            <img src="static/safe-two.png" />
          </span>
          <h4>
            <strong>Safe and Secure</strong>
          </h4>
          <p className="text-faded mb-0">You can trust us with your data</p>
        </div>


      </div>

    </div>

  </section>

  <section className="content-section bg-light" id="about">
  <h1 className="title-uses">Use Cases</h1> 
    <div className="container-box">   
          <section className='child-container'>
          <img className="money" src="/static/texting.png" />
          </section>    
          <section className='child-container'>
          <h1 className="right-text">SMS is cheap</h1>
          <p className="use-paragraph">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting
            , remaining essentially unchanged. It was popularised in the 1960s with the release 
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </section>  
    </div>
  </section>


  <section className="content-section bg-light" id="about">
    <div className="container-box">      
          <section className='child-container'>
          <h1 className="right-text">Microtransactions</h1>
          <p className="use-paragraph">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting
            , remaining essentially unchanged. It was popularised in the 1960s with the release 
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </section>
          <section className='child-container'>
          <img className="money" src="/static/banking.png" />
          </section>    
    </div>
  </section>


  <section className="content-section bg-light" id="about">
    <div className="container-box"> 
          <section className='child-container'>
          <img className="money" src="/static/blockchain.jpg" />
          </section>     
          <section className='child-container'>
          <h2 className="right-text">Participate in Blockchain</h2>
          <p className="use-paragraph">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting
            , remaining essentially unchanged. It was popularised in the 1960s with the release 
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </section> 
    </div>
  </section>


  <section className="content-section bg-light" id="about">
    <div className="container-box"> 
          <section className='child-container'>
          <h2 className="right-text">People in Austere Environments</h2>
          <p className="use-paragraph">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting
            , remaining essentially unchanged. It was popularised in the 1960s with the release 
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </section>
          <section className='child-container'>
          <img className="money" src="/static/camping.jpg" />
          </section>    
    </div>
  </section>


  <footer className="footer text-center">
    <div className="container">
      <ul className="list-inline mb-5">
        <li className="list-inline-item"></li>
     
   
        <li className="list-inline-item">
  
        </li>
        <li className="list-inline-item">

        </li>
      </ul>
      <p className="text-muted small mb-0">Copyright &copy; ToshiText 2019</p>
    </div>
  </footer>


    </div>
  </BaseLayout>
  )
 }
}
  export default Index;
