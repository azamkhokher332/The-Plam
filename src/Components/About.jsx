import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Title from './Title';
import about3 from '../assests/images/7.png';
import "../about-us.css";
import side1 from '../assests/images/2.png';
import about2 from '../assests/images/7.png';
import bg_1 from '../assests/images/bg-4.png';
import bg_2 from '../assests/images/1.png';
import bg_9 from '../assests/images/9.png';
import bg_6 from '../assests/images/9.png';




const About = () => {
  return (

<>
<Header />
<Title title="About Us" image={about2} />

<section className="about-us-area">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-12 col-lg-6">
        <div className="about-text mb-100">
          <div className="section-heading">
            <div className="line" />
            <h2>A place to remember</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada
            lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac
            ligula sapien. Suspendisse cursus faucibus finibus.
          </p>
          <a href="#" className="btn palatin-btn mt-50">
            Read More
          </a>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="about-thumbnail mb-100">
          <img src={side1} alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
{/* Fixed banner  */}

<section
  className="our-milestones section-padding-100-0 bg-img bg-overlay bg-fixed"
  style={{ backgroundImage: `url(${bg_1})` }}
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-lg-8">
        <div className="section-heading text-center white">
          <div className="line-" />
          <h2>Our Milestones</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada
            lorem maximus mauris sceleri sque, at rutrum nulla dictum.
          </p>
        </div>
      </div>


      
    </div>
    <div className="row">
      {/* Single Cool Facts */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div
          className="single-cool-fact mb-100 wow fadeInUp"
          data-wow-delay="300ms"
          style={{
            visibility: "visible",
            animationDelay: "300ms",
            animationName: "fadeInUp"
          }}
        >
          <div className="scf-text">
          <i class="fa fa-snowflake-o" aria-hidden="true"></i>
            <h2>
              <span className="counter">231</span>
            </h2>
            <p>Cocktails/day</p>
          </div>
        </div>
      </div>
      {/* Single Cool Facts */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div
          className="single-cool-fact mb-100 wow fadeInUp"
          data-wow-delay="500ms"
          style={{
            visibility: "visible",
            animationDelay: "500ms",
            animationName: "fadeInUp"
          }}
        >
          <div className="scf-text">
          <i class="fa fa-building" aria-hidden="true"></i>
            <h2>
              <span className="counter">3</span>
            </h2>
            <p>Pools</p>
          </div>
        </div>
      </div>
      {/* Single Cool Facts */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div
          className="single-cool-fact mb-100 wow fadeInUp"
          data-wow-delay="700ms"
          style={{
            visibility: "visible",
            animationDelay: "700ms",
            animationName: "fadeInUp"
          }}
        >
          <div className="scf-text">
          <i class="fa fa-object-ungroup" aria-hidden="true"></i>
            <h2>
              <span className="counter">79</span>
            </h2>
            <p>Rooms</p>
          </div>
        </div>
      </div>
      {/* Single Cool Facts */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div
          className="single-cool-fact mb-100 wow fadeInUp"
          data-wow-delay="900ms"
          style={{
            visibility: "visible",
            animationDelay: "900ms",
            animationName: "fadeInUp"
          }}
        >
          <div className="scf-text">
          <i class="fa fa-sort-amount-asc" aria-hidden="true"></i>
            <h2>
              <span className="counter">25</span>
            </h2>
            <p>Apartments</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="our-hotels-area section-padding-100-0">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="section-heading text-center">
          <div className="line-" />
          <h2>Our Hotel</h2>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      {/* Single Hotel Info */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="single-hotel-info mb-100">
          <div className="hotel-info-text">
            <h6>
              <span className="fa fa-check" /> Donec malesuada lorem maximus
              mauris
            </h6>
            <h6>
              <span className="fa fa-check" /> Integer tempus ligula sem, id
              feugiat
            </h6>
            <h6>
              <span className="fa fa-check" /> Malesuada lorem maximus mauris
              sceleri{" "}
            </h6>
          </div>
          <div className="hotel-img">
            <img src={bg_6} alt="" />
          </div>
        </div>
      </div>
      {/* Single Hotel Info */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="single-hotel-info mb-100">
          <div className="hotel-info-text">
            <h6>
              <span className="fa fa-check" /> Tempus ligula sem, id feugiat
              quam
            </h6>
            <h6>
              <span className="fa fa-check" /> Integer tempus ligula sem, id
              feugiat
            </h6>
            <h6>
              <span className="fa fa-check" /> Esuada lorem maximus mauris
              sceleri
            </h6>
          </div>
          <div className="hotel-img">
            <img src={bg_2} alt="" />
          </div>
        </div>
      </div>
      {/* Single Hotel Info */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="single-hotel-info mb-100">
          <div className="hotel-info-text">
            <h6>
              <span className="fa fa-check" /> Tempus ligula sem, id feugiat
              quam
            </h6>
            <h6>
              <span className="fa fa-check" /> Integer tempus ligula sem, id
              feugiat
            </h6>
            <h6>
              <span className="fa fa-check" /> Esuada lorem maximus mauris
              sceleri
            </h6>
          </div>
          <div className="hotel-img">
            <img src={bg_9} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<Footer />
</>

  
  )
}
export default About;