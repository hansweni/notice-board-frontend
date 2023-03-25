import React,{useState, useEffect}from 'react'
import style from './Body.module.css';
import SearchBar from './SearchBar/SearchBar'
import NoticeCardBrief from './SearchResult/NoticeCardBrief/NoticeCardBrief';
export default function Body() {
  const[notices, setNotices] = useState([]);
  function loadNotices(url){
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) =>  {
        let arrData = data.Notices
        setNotices(arrData);
        
    }
    )
  }
  useEffect(()=>{
     loadNotices('/api/notice');
  },[])
  
  return (
    <div>
      <div className={style.body}>
        <SearchBar updateContent={setNotices}/> 
        {notices.map(noticeInfo =>
            <div key={noticeInfo._id}>
              <NoticeCardBrief info={noticeInfo} />                        
            </div>
        )} 
      </div>
        
    </div>
  )
}
