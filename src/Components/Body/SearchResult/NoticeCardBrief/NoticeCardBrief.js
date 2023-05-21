import React,{useState} from 'react'
import style from './NoticeCardBrief.module.css';
import ShowNotice from '../../../NoticeOperations/ShowNotice';
export default function NoticeCardBrief(props) {

  const [details, setDetails] = useState([]);
  const [openMOdel, SetOpenModel] = useState(false);
  const showDetails = (event)=>{
   
    let   url = `/api/notice/Search?RefNo=${event.target.value}`;
    loadNotices(url); 
    if(details.length !== 0){
         SetOpenModel(true);
    }
  }

  function loadNotices(url){
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) =>  {
        let arrData = data.Notices
        setDetails(arrData);
    }
    )
}

const handleClick =()=>{
  const url = `http://localhost:5000/api/admin/view?RefNo=${props.info.RefNo}`
  window.open(url, "_blank");
}
  
  return (
    <div className={style.noticeCardBrief}>
        <ShowNotice open={openMOdel} onClose={() =>SetOpenModel(false)} details={details} />
        <div className={style.date}>
        &nbsp;{props.info.IssueDate.substring(0,10)}&nbsp;
        </div>
        <div className={style.subject} onClick={handleClick}>
            {props.info.Subject}
        </div>       
        <button className={style.moreBtn} value={props.info.RefNo} onClick={showDetails}>MORE</button>   
        <div className={style.department}>
        &nbsp; {props.info.PostedBy} &nbsp;
        </div>
        </div>
  )
}
