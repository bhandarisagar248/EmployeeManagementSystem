import axios from "axios";
const host='http://localhost:8080/api/employee';
export const getAllEmployee=()=>{
    
return(
    axios.get(`${host}/all`)
);

}

export const addEmployee=(employee)=>{

return(
  axios.post(`${host}`, employee)  
);
}
export const updateEmployee=(employee)=>{
 return(
    axios.put(`${host}/${employee.id}`,employee)
 )
}
export const deleteEmployee=(id)=>{

return(
axios.delete(`${host}/${id}`)

)

}

export const signup=(user)=>{
  return(
axios.post(`${host}/signup`,user)
  )
  }

export const login=(user)=>{
  return(
axios.post(`${host}/login`,user)

  )

}

export const update=(user)=>{
  return(

    axios.put(`${host}/update`,user)
  )
}

