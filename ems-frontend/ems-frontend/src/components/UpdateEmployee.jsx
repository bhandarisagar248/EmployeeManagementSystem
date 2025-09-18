import { useEffect, useState } from "react";
import { updateEmployee } from "../Service/EmploymentService";
import { useLocation, useNavigate } from "react-router-dom";
import '../css/updateEmployee.css';

const UpdateEmployee=()=>{
    const location=useLocation();
    
const navigate=useNavigate();

const [validate_Name,setvalidate_Name]=useState(true);
const [validate_Email,setvalidate_Email]=useState(true);

    const [employee,setEmployees]=useState([]);
    const Employee=location?.state;

      const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone,setPhone]=useState('');


    useEffect(()=>{

        setEmployees(Employee);
        if(Employee){
            setId(Employee.id);
            setName(Employee.name);
            setEmail(Employee.email);
            setPhone(Employee.phone);
        }

    },[Employee])


 



const handleSumbit=(e)=>{

e.preventDefault();

if(!name && email){
    setvalidate_Email(true);
    setvalidate_Name(false);
    return false;
}
if(!email && name){
    setvalidate_Email(false);
    setvalidate_Name(true);
    return false;
}

if(!name && !email){
    setvalidate_Name(false);
    setvalidate_Email(false);
    alert("Please Enter Detail.");

    return false;
}



const payload={
id,
name,
email,
phone
}

updateEmployee(payload).then((response)=>{

    alert("Updated Success");
    navigate("/employee");
}).catch((error)=>{
    console.log(error);
    alert("Unable to Update");
})


}


return(
<>
<div className="card text-center mb-3 d-flex align-items-center justify-content-center" style={{width:"auto",backgroundColor:'#98cd97',border:"none"}}>
      <div className="card-body w-auto" style={{border:'9px solid #b0dcaa',borderRadius:'1rem'}}>
        <form className="container" onSubmit={handleSumbit}>
          <h3 className="text-white card-title">Update Employee</h3>

          <div className="form-group mb-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="phone">Phone No:</label>
            <input type="number"
            id="phone"
            className="form-control"
            value={phone}
            onChange={(e)=>setPhone(e.target.value.toString())}
            required
            />
          </div>

          <button type="submit" className="btn btn-primary my-4">
            Update
          </button>
        </form>
      </div>
    </div>

</>
)
}



export default UpdateEmployee;