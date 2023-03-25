import React, {useState}from 'react'
import style from './SearchBar.module.css'
export default function SearchBar({updateContent}) {

  const [tags, setTags] = useState('');
  const [type, setType] = useState('orTags');

  const inputEvent1 = (event)=>{
          setTags(event.target.value);
      };
  const inputEvent2 = (event)=>{
          setType(event.target.value);
      };
  const formSubmit = (event)=>{
      // Routing url building Start from here
      let url = '/api/notice'
      if(type === 'orTags' && tags !== ''){
          url = `/api/notice/OrTags?Tags=${tags}`;
      }else if(type === 'andTags' && tags !== ''){
          url = `/api/notice/AndTags?Tags=${tags}`;
      }else if(type === 'RefNo' && tags !== ''){
          url = `/api/notice/Search?RefNo=${tags}`;
      }
      loadNotices(url);
      
      event.preventDefault()
  }; 
  
  const FilterCSE = (event)=>{
    let url = `/api/notice/OrTags?Tags=CSE`
    loadNotices(url);
      
    event.preventDefault()
    console.log("filtering cse");
};

const FilterIT = (event)=>{
    let url = `/api/notice/OrTags?Tags=IT`
    loadNotices(url);
      
    event.preventDefault()
    //console.log("filtering IT");
};
const FilterECE = (event)=>{
    let url = `/api/notice/OrTags?Tags=ECE`
    loadNotices(url);
      
    event.preventDefault()
    //console.log("filtering ECE");
};
const FilterCIVIL = (event)=>{
    let url = `/api/notice/OrTags?Tags=CIVIL`
    loadNotices(url);
      
    event.preventDefault()
    //console.log("filtering CIVIL");
};
  
  function loadNotices(url){
      fetch(url)
      .then((response) => {
          return response.json();
      })
      .then((data) =>  {
          let arrData = data.Notices
          updateContent(arrData);
      }
      )
  }

  return (
    <div>
      <div className={style.searchBar}>
         <form className={style.form} onSubmit={formSubmit}>
         <button className={style.btn} onClick={FilterCSE}>CSE </button>
         <button className={style.btn} onClick={FilterIT}>IT</button>
         <button className={style.btn} onClick={FilterECE}>ECE</button>
         <button className={style.btn} onClick={FilterCIVIL}>CIVIL</button>
            <select onChange={inputEvent2}>
                <option defaultValue value="recent">Recent</option>
                <option value="orTags">Or Tags</option>
                <option value="andTags">And Tags</option>                
                <option value="RefNo">Ref No.</option>
            </select>
            <input type="text" placeholder='Enter Tags or Ref No' onChange={inputEvent1}></input>
           <button className={style.btn}>Find</button>
         </form>
      </div>
    </div>
  )
}
