import { useEffect, useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthContext.jsx";

export const Navbar=()=>{
  const navigate=useNavigate();

  const { isLogin, setIsLogin } = useContext(AuthContext); 
  useEffect(()=>{
    const user=localStorage.getItem("user");
    if(user){
  setIsLogin(true);
}
else{
  setIsLogin(false);
  navigate("/login");
}

  },[]);


  const handleLogin=()=>{
    navigate("/login");
  }


  const handleLogout=()=>{
    //to clear the local storage data including user
    localStorage.clear();
    setIsLogin(false);
    navigate("/login");

  }
return(
<>
<nav className="navbar navbar-expand-lg mb-4" style={{background:'#4a9250',color:'#FFFFFF'}}>
{/* <nav className="navbar navbar-expand-lg mb-4" style={{background:'#98CD97',color:'#FFFFFF'}}> */}
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:'#FFFFFF'}}>Employee Management System</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex" id="navbarNavDropdown" style={{color:'#FFFFFF',justifyContent:"space-between"}}>
      <ul className="navbar-nav" style={{color:'#FFFFFF'}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{color:'#FFFFFF'}}>Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#" style={{color:'#FFFFFF'}}to="/employee">Employees</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#" style={{color:'#FFFFFF'}} to="/profile">Profile</Link>
        </li>
      </ul>
  {isLogin? (
            <button
              className="btn btn-light"
              type="button"
              style={{
                borderRadius: "10px",
                maxHeight: "40px",
                maxWidth: "100px",
                width: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="btn btn-success"
              type="button"
              style={{
                borderRadius: "10px",
                maxHeight: "40px",
                maxWidth: "100px",
                width: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={handleLogin}
            >
              Login
            </button>
          )}
    </div>
  </div>
</nav>

</>
);
}