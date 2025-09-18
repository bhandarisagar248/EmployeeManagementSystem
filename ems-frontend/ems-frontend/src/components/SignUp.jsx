import { useState } from "react";
import { signup } from "../Service/EmploymentService";
import { useNavigate,Link } from "react-router-dom";

const SignUp=()=>{
    const [invalidError,setinvalidError]=useState(true);
    const[isPassword,setisPassword]=useState(true);
 const navigate=useNavigate();
const handleSignup=(e)=>{
   e.preventDefault(); // stop page reload

    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirm_password=document.getElementById("confirm_password").value;
    var phone=document.getElementById("phone").value;

    if(!name || ! email || ! phone){
setinvalidError(false);
document.getElementById("invalidError").innerText="* Please Enter all Details *";
return false;
    }
    if(!password || !confirm_password){
        setisPassword(false);
        document.getElementById("passError").innerText="* Please Enter Password *";
        return false;

    }
        if(password!==confirm_password){
        setisPassword(false);
        document.getElementById("passError").innerText="* Password and Confirm-Password not matched. *";
        return false;

    }

    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirm_password);
    console.log(phone);

    const payload={
        "name":name,
        "email":email,
        "password":password,
        "phone":phone
    }

    signup(payload).then((response)=>{
        alert("Signup Success");
        console.log(response.data);
        navigate("/profile",{state:response.data});
    }).catch((error)=>{
        console.log("Unable to Signup"+error);

    })


}



    return(
<>



<div className="card text-center mb-3 d-flex align-items-center justify-content-center" style={{width:"auto",backgroundColor:'#98cd97',border:"none"}}>
  <div className="card-body w-auto">

<form className="container" onSubmit={handleSignup}>
<h3 className="text-white card-title">Signup</h3>

<div className="form-group mb-2">
<label htmlFor="name">Name:</label>
<input type="text"
id="name"
name="name"
className="form-control"
required
>
</input>
</div>
<div className="form-group mb-2">
<label htmlFor="email">Email:</label>
<input type="email"
id="email"
name="email"
className="form-control"
required
>
</input>
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

<label htmlFor="confirm_password">Confirm Password:</label>
<input type="password"
id="confirm_password"
name="confirm_password"
className="form-control"
required
>
</input>
<p hidden={isPassword} id="passError" className="text-danger" style={{color:'#9a1927 !important'}}></p>
</div>

<div className="form-group mb-2">
<label htmlFor="phone">Phone:</label>
<input type="number"
id="phone"
name="phone"
className="form-control"
required
>
</input>
</div>
<p id="invalidError" className="text-danger" style={{color:'#9a1927 !important'}} hidden={invalidError}></p>
<p>Already have an account?<Link to="/login">Login</Link></p>
<button type="submit" className="btn btn-primary my-4">SignUp</button>
</form>
</div>
</div>        






</>
    )

}

export default SignUp;