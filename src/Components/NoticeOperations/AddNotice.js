import React,{useState} from 'react'
import style from './AddNotice.module.css';
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom';

export default function NoticePopup({open}) {
    const{register,handleSubmit} = useForm();
    const navigate = useNavigate();
    const onSubmit =(data)=>{
        try{ 
            const arr = data.Tags.split(" ");
            fetch('/api/admin/notice',{
             method: "POST",       
             body: JSON.stringify({
                 RefNo : `${data.RefNo}`,
                 IssueDate : `${data.IssueDate}`,
                 Tags : arr,
                 Subject : `${data.Subject}`,
                 Body : `${data.Body}`,
                 IssuerName : `${data.IssuerName}`,
                 IssuerDesignation : `${data.IssuerDesignation}`,
                 LastModifiedOn : `${new Date().toISOString()}`,
                 PostedBy : `${data.PostedBy}`,
                 
             }),
     
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
                }else if(data.RefNo === Data.RefNo) {
                    alert("Added Successfully to the DataBase ");
                }
             })
         }catch(error){
            console.log(error);
             alert("Exception occured ");
        }
         }
    
     const [isUnique , setIsUnique] = useState("Not Validated !!");
     const validate = ()=>{
        setIsUnique("Valid Reference Id :) ");
     }
  
  if(!open) return null;
  return (
    <div className={style.overlay}>
            <h1>Add Notice</h1> <button onClick={validate}>Validate Ref No </button>
            <form id='addNotice' className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <label>Reference No  : </label>
            <input type="text" {...register("RefNo")} placeholder="RefNo" required></input>
            <label>{isUnique}</label>
            <br/>
            <label>Issue Date : </label>
            <input type="date" {...register("IssueDate")}   required ></input><br/>
            <label>Subject : </label>
            <input type="text" {...register("Subject")} placeholder="Subject" required></input><br/>
            <label>Tags : </label>
            <input type="text" {...register("Tags")} placeholder="Tags" required></input><br/>
            <label> Body : </label> 
            <input type="text" {...register("Body")} placeholder="Body " required></input><br/>
            <label>Issuer Name : </label>
            <input type="text" {...register("IssuerName")} placeholder="Issueer  Name" required></input><br/>
            <label> Issuer Designation : </label>
            <input type="text" {...register("IssuerDesignation")} placeholder="Issuer  Designation" required></input><br/>
            <label>Posted By : </label>
            <input type="text" {...register("PostedBy")} placeholder="Posted  By" required></input><br/>        
            <button className={style.btn}>Add Entry </button>
        </form>

    </div>
  )
}
