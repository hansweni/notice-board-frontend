import React,{useState} from 'react'
import AddNotice from '../NoticeOperations/AddNotice';
import DeleteNotice from '../NoticeOperations/DeleteNotice';
import style from './Admin.module.css';
export default function AdminBody() {
  const [openModel, SetOpenModel] = useState(false);
  const [openModel2, SetOpenModel2] = useState(false);

  const addNotice = () =>{
    SetOpenModel(true);
    SetOpenModel2(false);
    
  }
  const editNotice = () =>{
    // console.log("adding Notice");
    // SetOpenModel(true);
  }
  const deleteNotice = () =>{
    SetOpenModel(false);
    SetOpenModel2(true);
  }
  return (
    <div className={style.adminBody}>
      
        <button className={style.btn} onClick={addNotice}> Add New Notice </button>
        <button className={style.btn} onClick={deleteNotice}> Delete Notice </button>
        <AddNotice open={openModel} onClose={() =>SetOpenModel(false)} />
        <DeleteNotice open={openModel2} onClose={() =>SetOpenModel2(false)} />

    </div>
  )
}
