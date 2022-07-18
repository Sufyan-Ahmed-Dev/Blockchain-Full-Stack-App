
function Navbar() {
  return (
   <>
 {/* <!-- ======= Header ======= --> */}

 <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><a href="index.html">BlockChain-App</a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="active" href="index.html">Home</a></li>
          <li><a href="#about.html">About</a></li>
          <li><a href="#courses.html">Services</a></li>
          <li><a href="#trainers.html">Transiction</a></li>
          <li><a href="#events.html">SignIn</a></li>
        

       
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* !-- .navbar --> */}

      <a href="#courses.html" className="get-started-btn">Login</a>

    </div>
  </header>
  {/* <!-- End Header --> */}

   
   </>
  )
}

export default Navbar