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
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h2>Send Your Friends and Family Money in Seconds!</h2>
          <p className="lead mb-5">This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at</p>
          <img src="/static/money.png" />
        </div>
      </div>
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
        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
          <span className="service-icon rounded-circle mx-auto mb-3">
            <img src="static/phone.png" />
          </span>
          <h4>
            <strong>Ease of Use</strong>
          </h4>
          <p className="text-faded mb-0">Freshly redesigned for Bootstrap 4.</p>
        </div>
        <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
          <span className="service-icon rounded-circle mx-auto mb-3">
            <i className="icon-like"></i>
          </span>
          <h4>
            <strong>Purchase Blockchain</strong>
          </h4>
          <p className="text-faded mb-0">Millions of users
            <i className="fas fa-heart"></i>
            Start Bootstrap!</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <span className="service-icon rounded-circle mx-auto mb-3">
            <i className="icon-mustache"></i>
          </span>
          <h4>
            <strong>No Fees</strong>
          </h4>
          <p className="text-faded mb-0">I mustache you a question...</p>
        </div>
      </div>
    </div>
  </section>

  <section className="content-section" id="portfolio">
    <div className="container">
      <div className="content-section-heading text-center">
        <h3 className="text-secondary mb-0">Portfolio</h3>
        <h2 className="mb-5">Recent Projects</h2>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6">
          <a className="portfolio-item" href="#">
            <span className="caption">
              <span className="caption-content">
                <h2>Stationary</h2>
                <p className="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
              </span>
            </span>
            <img className="img-fluid" src="img/portfolio-1.jpg" alt=""/>
          </a>
        </div>
        <div className="col-lg-6">
          <a className="portfolio-item" href="#">
            <span className="caption">
              <span className="caption-content">
                <h2>Ice Cream</h2>
                <p className="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
              </span>
            </span>
            <img className="img-fluid" src="img/portfolio-2.jpg" alt=""/>
          </a>
        </div>
        <div className="col-lg-6">
          <a className="portfolio-item" href="#">
            <span className="caption">
              <span className="caption-content">
                <h2>Strawberries</h2>
                <p className="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
              </span>
            </span>
            <img className="img-fluid" src="img/portfolio-3.jpg" alt=""/>
          </a>
        </div>
        <div className="col-lg-6">
          <a className="portfolio-item" href="#">
            <span className="caption">
              <span className="caption-content">
                <h2>Workspace</h2>
                <p className="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
              </span>
            </span>
            <img className="img-fluid" src="img/portfolio-4.jpg" alt=""/>
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
