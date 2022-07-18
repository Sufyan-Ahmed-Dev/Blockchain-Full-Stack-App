import React from 'react'

function Transiction() {
  return (
  
    <>
     {/* <!-- ======= Popular Courses Section ======= --> */}
    <section id="popular-courses" class="courses">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          {/* <h2>Courses</h2> */}
          <p>Transiction</p>
        </div>

        <div class="row" data-aos="zoom-in" data-aos-delay="100">

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="course-item">
              {/* <img src="assets/img/course-3.jpg" class="img-fluid" alt="..."/> */}
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4>Ether</h4>
                  <p class="price">Ether Balance</p>
                </div>

                <h3><a href="course-details.html">Sender Address and keywork</a></h3>
                <p>Buyer Address And message</p>
                <div class="trainer d-flex justify-content-between align-items-center">
                  <div class="trainer-profile d-flex align-items-center">
                    {/* <img src="assets/img/trainers/trainer-3.jpg" class="img-fluid" alt=""/> */}
                    <span>Account name</span>
                  </div>
                  <div class="trainer-rank d-flex align-items-center">
                    <i class="bx bx-user"></i>&nbsp;20
                    &nbsp;&nbsp;
                    <i class="bx bx-heart"></i>&nbsp;85
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