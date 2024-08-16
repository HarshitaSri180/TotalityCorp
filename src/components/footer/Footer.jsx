import React from 'react';

function Footer() {
  const containerStyle = {
    background: 'linear-gradient(#04b1cf, #212530)',
    backgroundClip: 'text',
    textShadow: '#9090e0',
    fontWeight: 500,
    WebkitTextFillColor: 'transparent', // Consider using a more standard property or a CSS-in-JS library
    textDecoration: 'none',
  };

  return (
    <div className="container" >
      {/* Your footer content */}
      <div className="py-5">
          <div className="row">
            {/* Section 1 */}
            <div className="col-6 col-md-2 mb-3">
              <h5 style={containerStyle}>Section</h5>
              <ul className="nav flex-column" >
                <li className="nav-item mb-2" style={containerStyle}>
                 Home
                </li>
                <li className="nav-item mb-2" style={containerStyle}>
                  Features
                </li>
                <li className="nav-item mb-2" style={containerStyle}>
                 Pricing
                </li>
                <li className="nav-item mb-2" style={containerStyle}>
                  FAQs
                </li>
                <li className="nav-item mb-2" style={containerStyle}>
                About
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="col-6 col-md-2 mb-3">
              <h5 style={containerStyle}>Section</h5>
              <ul className="nav flex-column" >
                <li className="nav-item mb-2" style={containerStyle}>
                 Home
                </li>
                <li className="nav-item mb-2" style={containerStyle}>
                  Features
                </li>
                <li className="nav-item mb-2" style={containerStyle}>
                 Pricing
                </li>
                <li className="nav-item mb-2" style={containerStyle}>
                  FAQs
                </li>
                <li className="nav-item mb-2" style={containerStyle}>
                About
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="col-6 col-md-2 mb-3">
              <h5 style={containerStyle}>Section</h5>
              <ul className="nav flex-column" >
                <li className="nav-item mb-2" style={containerStyle}>
                 Home
                </li>
                <li className="nav-item mb-2" style={containerStyle}>
                  Features
                </li>
                <li className="nav-item mb-2" style={containerStyle}>
                 Pricing
                </li>
                <li className="nav-item mb-2" style={containerStyle}>
                  FAQs
                </li>
                <li className="nav-item mb-2" style={containerStyle}>
                About
                </li>
              </ul>
            </div>

            {/* Subscribe Section */}
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5 style={containerStyle}>Subscribe to our newsletter</h5>
                <p style={containerStyle}>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  {/* <label htmlFor="newsletter1" className="visually-hidden">Email address</label> */}
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p className='text-dark'>© 2024 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#twitter"></use>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#facebook"></use>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

  );
}

export default Footer;