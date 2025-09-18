import { useState } from "react";
import { addEmployee } from "../Service/EmploymentService";
import { useNavigate } from "react-router-dom";

 const AddEmployee=()=>{
const[name,setname]=useState(null);
const [email,setemail]=useState(null);
const [phone,setphone]=useState(null);

const navigate=useNavigate();

const [validate_Input,setvalidate_Input]=useState(true);


const handleSumbit=(e)=>{

e.preventDefault();

var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var phone =document.getElementById("phone").value;

if(!name && email && phone){
    validate_Input(false);
    document.getElementById(validate_Input).innerText="Name is required."
    return false;
}
if(!email && name && phone){
    validate_Input(false);
    document.getElementById(validate_Input).innerText="Email is required."
    return false;
}
if(!phone && name && email){
    validate_Input(false);
    document.getElementById(validate_Input).innerText="Phone is required."
    return false;
}

if(!name && !email && !phone){
    validate_Input(false);
    document.getElementById(validate_Input).innerText="All fields are required."
    alert("Please Enter Detail.");

    return false;
}

setname(name);
setemail(email);
setphone(phone);

const payload={
"name":name,
"email":email,
"phone":phone
}

addEmployee(payload).then((response)=>{
    alert("Employee Added Success.");
    navigate('/employee');
    
}).catch(()=>{
    alert("Unable to Add Employess");
});


}


return(
<>
<div className="card text-center mb-3 d-flex align-items-center justify-content-center" style={{width:"auto",backgroundColor:'#98cd97',border:"none"}}>
  <div className="card-body w-auto">

<form className="container">
<h3 className="text-white card-title">Add Employee</h3>
<div className="form-group mb-2">
<label htmlFor="name">Name:</label>
<input type="text" id="name" className="name form-control" required></input>
</div>
<div className="form-group mb-2">
<label htmlFor="email">Email:</label>
<input type="email" id="email" className="email form-control" required></input>
</div>
<div className="form-group mb-2">
<label htmlFor="phone">Phone:</label>
<input type="number" id="phone" name="phone" className="phone form-control" required></input>
</div>
<p hidden={validate_Input} id="validate_Input" className="text-danger">Phone is required.</p>

<button type="button" className="btn btn-primary my-4" onClick={handleSumbit}>Add Employee</button>
</form>

  </div>
</div>

</>
)
}

export default AddEmployee;