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
      </div>
    </div>
  </section>

  

  <section className="content-section" id="portfolio">
    <div className="container">
      <div className="content-section-heading text-center">
        <h2 className="mb-5">Use Cases</h2>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6">
          <a className="portfolio-item" href="#">
            <span className="caption">
              <span className="caption-content">
                <h2>Foreign Countries</h2>
                <p className="mb-0">Wireless internet data is very expensive</p>
              </span>
            </span>
            <img className="portfolio" src="/static/chat.png" />
          </a>
        </div>
        <div className="col-lg-6">
          <a className="portfolio-item" href="#">
            <span className="caption">
              <span className="caption-content">
                <h2>Microtransactions</h2>
                <p className="mb-0">People who need to send small amounts of money</p>
              </span>
            </span>
            <img className="portfolio" src="/static/currency.png" alt=""/>
          </a>
        </div>
        <div className="col-lg-6">
          <a className="portfolio-item" href="#">
            <span className="caption">
              <span className="caption-content">
                <p className="mb-0">People in an austere environment</p>
              </span>
            </span>
            <img className="portfolio" src="/static/tent.png" alt=""/>
          </a>
        </div>
        <div className="col-lg-6">
          <a className="portfolio-item" href="#">
            <span className="caption">
              <span className="caption-content">
                <h2>Workspace</h2>
                <p className="mb-0">Participate in blockchain</p>
              </span>
            </span>
            <img className="portfolio" src="/static/bitcoin.png" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>


  <footer className="footer text-center">
    <div className="container">
      <ul className="list-inline mb-5">
        <li className="list-inline-item">
          <a className="social-link rounded-circle text-white mr-3" href="#">
            <i className="icon-social-facebook"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="social-link rounded-circle text-white mr-3" href="#">
            <i className="icon-social-twitter"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="social-link rounded-circle text-white" href="#">
            <i className="icon-social-github"></i>
          </a>
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
