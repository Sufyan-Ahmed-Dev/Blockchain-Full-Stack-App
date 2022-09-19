import React from 'react'

function Transiction() {
  return (

    <>
      {/* <!-- ======= Popular Courses Section ======= --> */}
      <section id="popular-courses" className="courses">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            {/* <h2>Courses</h2> */}
            <p>Transiction</p>
          </div>

          <div className="row" data-aos="zoom-in" data-aos-delay="100">

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="course-item">
                {/* <img src="assets/img/course-3.jpg" className="img-fluid" alt="..."/> */}
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>Ether</h4>
                    <p className="price">Ether Balance</p>
                  </div>

                  <h3><a href="course-details.html">Sender Address and keywork</a></h3>
                  <p>Buyer Address And message</p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      {/* <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt=""/> */}
                      <span>Account name</span>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bx bx-user"></i>&nbsp;20
                      &nbsp;&nbsp;
                      <i className="bx bx-heart"></i>&nbsp;85
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Course Item--> */}

          </div>

        </div>
      </section>


    </>
  )
}

export default Transiction