import React, { useEffect, useState } from "react";
import{ getAllEmployee,deleteEmployee } from '../Service/EmploymentService';
import { updateEmployee } from "../Service/EmploymentService";
import { Link, useNavigate } from "react-router-dom";

function EmployeeList() {

 const [Employees,setEmployees]=useState([]);
 const navigate=useNavigate();

useEffect(()=>{
 getAllEmployee().then((response)=>{
setEmployees(response.data);
 }).catch( error=>{
   console.error("unable to Fetch"+error)

  }
 )

},[])

const handleUpdate=(employee)=>{
   navigate("/update",{state:employee});

 }

 const handleDelete=(id)=>{
  var sure=window.confirm("Are you want to Delete ?");
  if(sure){

    deleteEmployee(id).then((response)=>{
alert("Employee Deleted Success");
// navigate("/employee");
    }).catch((error)=>{
      console.log(error);
      alert("Unable to Delete");
    })
  };


  return false;

 }


  return (
    <>

    <div className="container" style={{minHeight:'80vh'}}>
      <Link to="/add" className="mb-4"><button type="button" className="btn btn-primary mb-4">Add Employee</button></Link>
    <h3 style={{textAlign:'center'}}>List Of Employees</h3>
      <table className="table table-striped table-hover table-bordered align-middle shadow-sm rounded" style={{backgroundColor:'#dfebde !important'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>Email</th>
            <th>Phone</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
            { Employees &&
            Employees.map(employee=>{
                return(      
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td><button type="button" className="btn btn-primary mx-4" onClick={()=>handleUpdate(employee)}>Update</button>
           <button type="button" className="btn btn-danger" onClick={()=>handleDelete(employee.id)}>Delete</button></td>
          </tr>
                );
            })
            }
            
        </tbody>
      </table>
      </div>
    </>
  );
}

export default EmployeeList;
