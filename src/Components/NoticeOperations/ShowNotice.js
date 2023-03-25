import React from 'react'
import style from './ShowNotice.module.css'
export default function ShowNotice({open, onClose, details}) {
if(!open) return null;
  return (
    <div onClick={onClose} className={style.overlay}>
    <div onClick={(e)=> e.stopPropagation()} className={style.modelContainer}>
        <div className={style.Subject}></div>
        <div className={style.closebtn}>
        <p className={style.closeBtn} onClick={onClose}>X</p>
        </div>
        <div className={style.mainContentContainer}>
            <label>Ref No : {details[0].RefNo}</label><br/>
            <label>Issue Date  : {details[0].IssueDate.substring(0,10)}</label><br/><br/>
            <label>Subject : {details[0].Subject}</label><br/>
            {/* <label>Tags : {details[0].Tags.join(" ")}</label><br/><br/> */}
            <label>Body :<br/> {details[0].Body}</label><br/><br/><br/>
            {/* <label>Issuer Name: {details[0].IssuerName}</label><br/> */}
            {/* <label>Issuer Designation : {details[0].IssuerDesignation}</label><br/>  */}
            <label>PostedBy : {details[0].PostedBy}</label><br/><br/><br/>
            <label>LastModifiedOn  : {details[0].LastModifiedOn}</label><br/>
           
            
        </div>
    </div>
</div>
  )
}
