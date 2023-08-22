import React from 'react';
import about3 from '../assests/images/7.png';

const Title = (props) => {
    console.log(props)
  return (
    <>
        <div className="jumbotron jumbotron-fluid title bg-img" style={{backgroundImage: `url('${props.image}')`}}>
            <div className="container">
                <div className="text-center">
                    <div class="bradcumbContent">
                        <h2>{props.title}</h2>
                    </div>
                </div>
            </div>
        </div>
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
</>
  )
}
export default Title