export const Footer=()=>{
return (
<>

<footer className="pt-5 pb-4" style={{backgroundColor:"#4a9250",maxHeight:'fit-content',height:'260px'}} >
  <div className="container text-md-left" >
    <div className="row">

      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
        <h5 className="fw-bold">Heilsa</h5>
        <p className="text-white">
          A healthy lifestyle app that helps you track, manage, 
          and achieve your wellness goals.
        </p>
      </div>

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="fw-bold">Products</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white text-decoration-none">Pricing</a></li>
          <li><a href="#" className="text-white text-decoration-none">Features</a></li>
          <li><a href="#" className="text-white text-decoration-none">Partnerships</a></li>
        </ul>
      </div>


      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="fw-bold">Resources</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white text-decoration-none">Help Center</a></li>
          <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
          <li><a href="#" className="text-white text-decoration-none">API Docs</a></li>
        </ul>
      </div>
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 className="fw-bold">Get in Touch</h6>
        <p className="text-white"><i className=" text-white bi bi-envelope-fill me-2"></i> support@heilsa.com</p>
        <p className="text-white"><i className=" text-white bi bi-phone-fill me-2"></i> +977-9800000000</p>
        <div>
          <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>

    </div>

    <hr className="border-light" style={{marginBottom:'1rem'}} />
    <div className="row align-items-center">
      <div className="col-md-7 col-lg-8">
        <p className="mb-0">© 2025 Heilsa Inc. All rights reserved.</p>
      </div>
      <div className="col-md-5 col-lg-4 text-md-end">
        <a href="#" className=" me-3 text-decoration-none"style={{color:'#212529'}}>Privacy Policy</a>
        <a href="#" className=" text-decoration-none"style={{color:'#212529'}}>Terms</a>
      </div>
    </div>
  </div>
</footer>



</>
)
}