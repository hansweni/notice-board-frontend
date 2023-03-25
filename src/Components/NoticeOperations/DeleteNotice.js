import React,{useState} from 'react'
import style from './DeleteNotice.module.css';
import {useNavigate} from 'react-router-dom';

export default function DeleteNotice({open}) {
  const [refNo, setRefNo] = useState("");
  const navigate = useNavigate();
  const onSubmit =(data)=>{
    try{ 
        const url = `/api/admin/notice?RefNo=${refNo}`
        fetch(url,{
         method: "DELETE",       
         headers: {
             "Content-type": "application/json; charset=UTF-8"
         }
     })
         .then((response) => {
             if(response.status === 401) navigate('/login');
             return response.json();
         })
         .then((Data) =>{
            if(Data.msg === "Error"){
                alert("Ops Something went wrong at your End.  Please check for duplicate Ref No or Fill mandatory Details corrctly and Try again ");
            }else if(Data.msg === 'Deleted Sucessfully') {
                alert("Deleted Successfully to the DataBase ");
            }
         })
     }catch(error){
        console.log(error);
         alert("Exception occured ");
    }
     }
  if(!open) return null;
  return (
    <div className={style.overlay}>
    <h1>Delete Notice </h1>
      <label>Enter Ref No : </label>
      <input value={refNo} onChange={(event)=>{setRefNo(event.target.value);}}></input><br/>
      <button onClick={onSubmit}>Delete Notice</button>
    </div>
  )
}
