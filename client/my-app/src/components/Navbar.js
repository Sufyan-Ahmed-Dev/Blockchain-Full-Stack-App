import React from 'react'

function Navbar() {
  return (
   <>
   
   <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="index.html">Blockchain-App</a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="active" href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="courses.html">Transiction</a></li>
          <li><a href="trainers.html">Sign-In</a></li> 
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <a href="courses.html" class="get-started-btn">Login</a>

    </div>
  </header>
   
   </>
  )
}

export default Navbar