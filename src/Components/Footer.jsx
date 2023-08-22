import React from 'react';
import logo1 from '../assests/images/logo.png';
import footer1 from '../assests/images/footer-map.png'

const Footer = () => {
  return (
    <>
  {/* Footer */}
  <footer className="page-footer font-small bg-dark py-4 mt-5">
    {/* Footer Links */}
    <div className="container text-center text-md-left">
      {/* Grid row */}
      <div className="row">
        {/* Grid column */}
        <div className="col-md-5 mt-md-0 mt-50">
          {/* Content */}
            <a className="navbar-brand" href="#">
                <img src={logo1} alt="Logo" />
            </a>
          <p className="text-white pr-5 pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
          </p>
        </div>
        {/* Grid column */}
        <hr className="clearfix w-100 d-md-none pb-3" />
        {/* Grid column */}
        <div className="col-md-4 mb-md-0 mt-50">
          {/* Links */}
          <h5 className="text-white mb-5">Find us on the map</h5>
            <a className='image mt-5'>
            <img src={footer1} alt="Logo" />
            </a>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div class="col-12 col-md-6 col-lg-3">
            <div class="footer-widget-area mt-50">
                <h5 class="widget-title mb-5 text-white">Subscribe to our newsletter</h5>
                <form action="#" method="post" class="subscribe-form">
                    <input type="email" name="subscribe-email" id="subscribeemail" placeholder="Your E-mail" />
                     <button type="submit">Subscribe</button>
                </form>
        </div>
                </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
    {/* Footer Links */}
    {/* Copyright */}
    <div className="container footer-copyright text-left py-3 text-white">
      © 2020 Copyright:
      <a href="/"> virtunetz.com</a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>
  )
}

export default Footer