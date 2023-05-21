import React,{useState} from 'react'
import style from './AddNotice.module.css';
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom';
import UploadFile from './UploadFile';

export default function NoticePopup({open}) {
    const{register,handleSubmit} = useForm();
    const [refv, setRefv] = useState('')
    const navigate = useNavigate();
    
    const onSubmit =(data)=>{
        try{ 
            const arr = data.Tags;
            setRefv(data.RefNo)
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
            <h1>Append Notice</h1> 
            <form id='addNotice' className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <label>Reference No  : </label>
            <input type="text" {...register("RefNo")} placeholder="RefNo" required></input>
            
            <br/>
            <label>Issue Date : </label>
            <input type="date" {...register("IssueDate")}   required ></input><br/>
            <label>Subject : </label>
            <input type="text" {...register("Subject")} placeholder="Subject" required></input><br/>
            <label>Tags : </label>
            <div>
          <label>
            <input type="checkbox" value="CSE" {...register('Tags')} />
            CSE
          </label>
          <label>
            <input type="checkbox" value="ECE" {...register('Tags')} />
            ECE
          </label>
          <label>
            <input type="checkbox" value="IT" {...register('Tags')} />
            IT
          </label>
          <label>
            <input type="checkbox" value="CIVIL" {...register('Tags')} />
            CIVIL
          </label>
          <label>
            <input type="checkbox" value="MECHANICAL" {...register('Tags')} />
            MECHANICAL
          </label>
          <label>
            <input type="checkbox" value="ELECTRICAL" {...register('Tags')} />
            ELECTRICAL
          </label>
          <label>
            <input type="checkbox" value="CSBS" {...register('Tags')} />
            CSBS
          </label>
          <label>
            <input type="checkbox" value="AIML" {...register('Tags')} />
            AIML
          </label>
          <label>
            <input type="checkbox" value="IOT" {...register('Tags')} />
            IOT
          </label>
          <label>
            <input type="checkbox" value="MANAGEMENT" {...register('Tags')} />
            MANAGEMENT
          </label>
          <label>
            <input type="checkbox" value="BCA" {...register('Tags')} />
            BCA
          </label>
          <label>
            <input type="checkbox" value="BSC" {...register('Tags')} />
            BSC
          </label>
          <label>
            <input type="checkbox" value="CLUBS" {...register('Tags')} />
            CLUBS
          </label>
          <label>
            <input type="checkbox" value="FACULTY" {...register('Tags')} />
            FACULTY
          </label>
          <label>
            <input type="checkbox" value="OTHERS" {...register('Tags')} />
            ALL
          </label>
        </div>
            {/*<select {...register("Tags")} required className={style.tag}>
                <option>Choose Option</option>
                <option value={"CSE"}>CSE</option>
                <option value={"ECE"}>ECE</option>
                <option value={"IT"}>IT</option>
                <option value={"CIVIL"}>CIVIL</option>
                <option value={"MECHANICAL"}>MECHANICAL</option>
                <option value={"ELECTRICAL"}>ELECTRICAL</option>
                <option value={"CSBS"}>CSBS</option>
                <option value={"AIML"}>AIML</option>
                <option value={"IOT"}>IOT</option>
                <option value={"MANAGEMENT"}>MANAGEMENT</option>
                <option value={"BCA"}>BCA</option>
                <option value={"BSC"}>BSC</option>
                <option value={"CLUBS"}>CLUBS</option>
                <option value={"FACULTY"}>FACULTY</option>
                <option value={"OTHERS"}>ALL</option>
            </select>*/}<br/>
            {/*<input type="text" {...register("Tags")} placeholder="Tags" required></input><br/>*/}
            <label> Body : </label> 
            <input type="text" {...register("Body")} placeholder="Body " value="none"></input><br/>
            <label>Issuer Name : </label>
            <input type="text" {...register("IssuerName")} placeholder="Issueer  Name" required></input><br/>
            <label> Issuer Designation : </label>
            <input type="text" {...register("IssuerDesignation")} placeholder="Issuer  Designation" required></input><br/>
            <label>Posted By : </label>
            <input type="text" {...register("PostedBy")} placeholder="Posted  By" required></input><br/>        
            <button className={style.btn}>Add Entry </button>
        </form>
        <UploadFile RefNo={refv} />

    </div>
  )
}
