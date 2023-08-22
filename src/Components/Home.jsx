import React from 'react';
import Header from './Header';
import Footer from './Footer';
import about1 from '../assests/images/5.png';
import about2 from '../assests/images/6.png';
import about3 from '../assests/images/7.png';
import {  Link } from 'react-router-dom';
import Background2  from '../assests/images/9.png';
import Background  from '../assests/images/1.png';
import Background3  from '../assests/images/6.png';
import Title from './Title';


const Home = () => {
  return (
  <>
    <Header />
      <div className="bg-image">
        <div className='container overlay'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-9 text-center banner'>
            <div className='text'> 
              <h2 className='heading'>Enjoy your life</h2>
                <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                  <a href="#" class="btn mt-50" >Read More</a>
            </div>
            </div>
          </div>
        </div>
      </div>
{/* dATE FORM GROUP  */}
<div className="book-now-area">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-lg-10">
        <div className="book-now-form">
          <form action="#">
            {/* Form Group */}
            <div className="form-group">
              <label htmlFor="select1">Check In</label>
              <select
                className="form-control"
                id="select1"
                style={{ display: "none" }}
              >
                <option>19 June</option>
                <option>20 June</option>
                <option>21 June</option>
                <option>22 June</option>
                <option>23 June</option>
                <option>24 June</option>
                <option>25 June</option>
              </select>
              <div className="nice-select form-control" tabIndex={0}>
                <span className="current">19 June</span>
                <ul className="list">
                  <li data-value="19 June" className="option selected">
                    19 June
                  </li>
                  <li data-value="20 June" className="option">
                    20 June
                  </li>
                  <li data-value="21 June" className="option">
                    21 June
                  </li>
                  <li data-value="22 June" className="option">
                    22 June
                  </li>
                  <li data-value="23 June" className="option">
                    23 June
                  </li>
                  <li data-value="24 June" className="option">
                    24 June
                  </li>
                  <li data-value="25 June" className="option">
                    25 June
                  </li>
                </ul>
              </div>
            </div>
            {/* Form Group */}
            <div className="form-group">
              <label htmlFor="select2">Check Out</label>
              <select
                className="form-control"
                id="select2"
                style={{ display: "none" }}
              >
                <option>20 June</option>
                <option>21 June</option>
                <option>22 June</option>
                <option>23 June</option>
                <option>24 June</option>
                <option>25 June</option>
                <option>26 June</option>
                <option>27 June</option>
              </select>
              <div className="nice-select form-control" tabIndex={0}>
                <span className="current">20 June</span>
                <ul className="list">
                  <li data-value="20 June" className="option selected">
                    20 June
                  </li>
                  <li data-value="21 June" className="option">
                    21 June
                  </li>
                  <li data-value="22 June" className="option">
                    22 June
                  </li>
                  <li data-value="23 June" className="option">
                    23 June
                  </li>
                  <li data-value="24 June" className="option">
                    24 June
                  </li>
                  <li data-value="25 June" className="option">
                    25 June
                  </li>
                  <li data-value="26 June" className="option">
                    26 June
                  </li>
                  <li data-value="27 June" className="option">
                    27 June
                  </li>
                </ul>
              </div>
            </div>
            {/* Form Group */}
            <div className="form-group">
              <label htmlFor="select3">Adults</label>
              <select
                className="form-control"
                id="select3"
                style={{ display: "none" }}
              >
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
              </select>
              <div className="nice-select form-control" tabIndex={0}>
                <span className="current">02</span>
                <ul className="list">
                  <li data-value="02" className="option selected">
                    02
                  </li>
                  <li data-value="03" className="option">
                    03
                  </li>
                  <li data-value="04" className="option">
                    04
                  </li>
                  <li data-value="05" className="option">
                    05
                  </li>
                  <li data-value= "06" className="option">
                    06
                  </li>
                </ul>
              </div>
            </div>
            {/* Form Group */}
            <div className="form-group">
              <label htmlFor="select4">Childrens</label>
              <select
                className="form-control"
                id="select4"
                style={{ display: "none" }}
              >
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
              </select>
              <div className="nice-select form-control" tabIndex={0}>
                <span className="current">01</span>
                <ul className="list">
                  <li data-value= "01" className="option selected">
                    01
                  </li>
                  <li data-value= "02" className="option">
                    02
                  </li>
                  <li data-value= "03" className="option">
                    03
                  </li>
                  <li data-value="04" className="option">
                    04
                  </li>
                  <li data-value="05" className="option">
                    05
                  </li>
                </ul>
              </div>
            </div>
            {/* Button */}
            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='container'>
    <div className='row'>
      <div className='col-12 col-md-6'>
        <div className='line-'></div>
          <div className='heading'>
            <h2>A place to remember</h2>
            <div className='para1'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum.
                Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. 
                Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
            </div>
              <div class="about-key-text">
                  <h6><span class="fa fa-check"></span> Donec malesuada lorem maximus mauris sceleri</h6>
                  <h6><span class="fa fa-check"></span> Malesuada lorem maximus mauris sceleri</h6>
                  <div className='palatin-btn'>
                  <a href="#" class="btn palatin-btn mt-50">Read More</a>
                  </div>
                  
              </div>
          </div>
      </div>
      <div className='col-12 col-md-6'>
      <div className="about-thumbnail homepage mb-100">
        {/* First Img */}
        <div className="first-img wow fadeInUp">
          <img src={about1} alt="" />
        </div>
        {/* Second Img */}
        <div className="second-img wow fadeInUp">
          <img src={about2} alt="" />
        </div>
        {/* Third Img*/}
        <div className="third-img wow fadeInUp">
          <img src={about3} alt="" />
        </div>
      </div>
    </div>
</div>
</div>
<section className="pool-area section-padding-100 bg-img bg-fixed">
  <div className="container">
    <div className="row justify-content-end">
      <div className="col-12 col-lg-7">
        <div
          className="pool-content text-center wow fadeInUp"
          data-wow-delay="300ms"
          style={{
            visibility: "visible",
            animationDelay: "300ms",
            animationName: "fadeInUp"
          }}
        >
          <div className="section-heading text-center white">
            <div className="line-" />
            <h2 className='text-white'>Infinity Pool</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris sceleri sque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris sceleri sque, at rutrum nulla
              dictum.
            </p>
          </div>
          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="pool-feature">
              <i class="fa fa-bath" aria-hidden="true"></i>
                <p>Pool Beachbar</p>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="pool-feature">
              <i class="fa fa-spinner" aria-hidden="true"></i>
                <p>Infinity Pool</p>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="pool-feature">
              <i class="fa fa-shower" aria-hidden="true"></i>
                <p>Sunbeds</p>
              </div>
            </div>
          </div>
          {/* Button */}
          <a href="#" className="btn palatin-btn1 mt-50">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="rooms-area section-padding-100-0">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-lg-6">
        <div className="section-heading text-center">
          <div className="line-" />
          <h2>Choose a room</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum.
            Ut ac ligula sapien.
          </p>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      {/* Single Rooms Area */}
      <div className="col-12 col-md-6 col-lg-4">
        <div
          className="single-rooms-area wow fadeInUp" >
          {/* Thumbnail */}
          <div className="bg-thumbnail bg-img" style={{
              background: `url(${Background})`,
            }}/>
          {/* Price */}
          <p className="price-from">From $150/night</p>
          {/* Rooms Text */}
          <div className="rooms-text">
            <div className="line" />
            <h4>Deluxe Room</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris sceleri sque.
            </p>
          </div>
          {/* Book Room */}
          <a href="#" className="book-room-btn btn palatin-btn">
            Book Room
          </a>
        </div>
      </div>
      {/* Single Rooms Area */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="single-rooms-area wow fadeInUp">
          {/* Thumbnail */}
          <div
            className="bg-thumbnail bg-img" style={{
              background: `url(${Background2})`,
            }}/>
          {/* Price */}
          <p className="price-from">From $150/night</p>
          {/* Rooms Text */}
          <div className="rooms-text">
            <div className="line" />
            <h4>Double Suite</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris sceleri sque.
            </p>
          </div>
          {/* Book Room */}
          <a href="#" className="book-room-btn btn palatin-btn">
            Book Room
          </a>
        </div>
      </div>
      {/* Single Rooms Area */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="single-rooms-area wow fadeInUp">
          {/* Thumbnail */}
          <div
            className="bg-thumbnail bg-img" style={{
              background: `url(${Background3})`,
            }}/>
          {/* Price */}
          <p className="price-from">From $100/night</p>
          {/* Rooms Text */}
          <div className="rooms-text">
            <div className="line" />
            <h4>Single Room</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris sceleri sque.
            </p>
          </div>
          {/* Book Room */}
          <a href="#" className="book-room-btn btn palatin-btn">
            Book Room
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />
  </>
  )
}

export default Home;
