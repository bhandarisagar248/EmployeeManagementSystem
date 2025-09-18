import { useContext, useState } from "react";
import { login } from "../Service/EmploymentService";
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthContext.jsx";


const Login=()=>{
  const navigate=useNavigate();
const { isLogin, setIsLogin } = useContext(AuthContext);
  
  const [isEmail,setEmail]=useState(true);
  const [isPassword,setPassword]=useState(true);
  const[invalidError,setinvalidError]=useState(true);
  
  const handleLogin=(e)=>{
  e.preventDefault(); // stop page reload
  var email=document.getElementById("email").value;
  var password=document.getElementById('password').value;

  if(!email && password){
      setEmail(false);
      setPassword(true);
    document.getElementById("emailError").innerText="* Email is required"
    return false;

  }

  if(email && !password){
   setPassword(false);
   setEmail(true);
    document.getElementById("passError").innerText="* Password is required"
    return false;
  }
  if(!email && !password){
    setEmail(false);
    setPassword(false);
    document.getElementById("emailError").innerText="* Email is required";
    document.getElementById("passError").innerText="* Password is required";
    return false;
    
  }
  const payload={
    "email":email,
    "password":password
  }

  login(payload).then((response)=>{
      // localStorage.setItem("user", JSON.stringify(response.data));
      alert("Login Success");
    handleLoginSuccess(response.data);
}).catch((error) => {
    setinvalidError(false);
    console.log(error);
  });

    }
const handleLoginSuccess = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
  setIsLogin(true);
  navigate("/profile");
};

return (
    <>

<div className="card text-center mb-3 d-flex align-items-center justify-content-center" style={{width:"auto",backgroundColor:'#98cd97',border:"none"}}>
  <div className="card-body w-auto">

<form className="container">
<h3 className="text-white card-title">Login</h3>

<div className="form-group mb-2">
<label htmlFor="email">Email:</label>
<input type="email"
id="email"
name="email"
className="form-control"
required
>
</input>
    <p  hidden={isEmail}id="emailError" className="text-danger"></p>
</div>

    <div className="form-group mb-2">
<label htmlFor="password">Password:</label>
<input type="password"
id="password"
name="password"
className="form-control"
required
>
</input>
    <p hidden={isPassword} id="passError" className="text-danger"></p>
</div>
<p id="invalidError" className="text-danger" hidden={invalidError}>Username or password is incorrect</p>
<p>Does not have an account? <Link to="/signup">SignUp</Link></p>
<button type="submit" className="btn btn-primary my-4" onClick={handleLogin}>Login</button>
</form>
</div>
</div>






</>
)

}

export default Login;