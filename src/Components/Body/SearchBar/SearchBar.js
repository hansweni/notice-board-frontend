import React, {useState}from 'react'
import style from './SearchBar.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
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
    let url = `/api/notice/OrTags?Tags=CSE OTHERS`
    loadNotices(url);
      
    event.preventDefault()
    console.log("filtering cse");
};


const FilterIT = (event)=>{
    let url = `/api/notice/OrTags?Tags=IT OTHERS`
    loadNotices(url);
      
    event.preventDefault()
    //console.log("filtering IT");
};
const FilterECE = (event)=>{
    let url = `/api/notice/OrTags?Tags=ECE OTHERS`
    loadNotices(url);
      
    event.preventDefault()
    //console.log("filtering ECE");
};
const FilterCIVIL = (event)=>{
    let url = `/api/notice/OrTags?Tags=CIVIL OTHERS`
    loadNotices(url);
      
    event.preventDefault()
    //console.log("filtering CIVIL");
};

const FilterMECH = (event)=>{
  let url = `/api/notice/OrTags?Tags=MECHANICAL OTHERS`
  loadNotices(url);
    
  event.preventDefault()
  //console.log("filtering MECHANICAL");
};

const FilterEE = (event)=>{
  let url = `/api/notice/OrTags?Tags=ELECTRICAL OTHERS`
  loadNotices(url);
    
  event.preventDefault()
  //console.log("filtering ELECTRICAL");
};

const FilterCSBS = (event)=>{
  let url = `/api/notice/OrTags?Tags=CSBS OTHERS`
  loadNotices(url);
    
  event.preventDefault()
  //console.log("filtering CSBS");
};

const FilterAIML = (event)=>{
  let url = `/api/notice/OrTags?Tags=AIML OTHERS`
  loadNotices(url);
    
  event.preventDefault()
  //console.log("filtering AIML");
};

const FilterIOT = (event)=>{
  let url = `/api/notice/OrTags?Tags=IOT OTHERS`
  loadNotices(url);
    
  event.preventDefault()
  //console.log("filtering IOT");
};

const FilterMGMT = (event)=>{
  let url = `/api/notice/OrTags?Tags=MANAGEMENT OTHERS`
  loadNotices(url);
    
  event.preventDefault()
  //console.log("filtering MGMT");
};

const FilterBCA = (event)=>{
  let url = `/api/notice/OrTags?Tags=BCA OTHERS`
  loadNotices(url);
    
  event.preventDefault()
  //console.log("filtering BCA");
};

const FilterBSC = (event)=>{
  let url = `/api/notice/OrTags?Tags=BSC OTHERS`
  loadNotices(url);
    
  event.preventDefault()
  //console.log("filtering BSC");
};

const FilterCLUBS = (event)=>{
  let url = `/api/notice/OrTags?Tags=CLUBS OTHERS`
  loadNotices(url);
    
  event.preventDefault()
  //console.log("filtering CLUBS AND COMMITTIES");
};

const FilterFACULTY = (event)=>{
  let url = `/api/notice/OrTags?Tags=FACULTY OTHERS`
  loadNotices(url);
    
  event.preventDefault()
  //console.log("filtering FACULTY");
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
    <div className={style.searchbar}>
      {/*<div className={style.searchBar}>
         <form className={style.form} onSubmit={formSubmit}>
         <button className={style.btn} onClick={FilterCSE}>CSE </button>
         <button className={style.btn} onClick={FilterIT}>IT</button>
         <button className={style.btn} onClick={FilterECE}>ECE</button>
         <button className={style.btn} onClick={FilterCIVIL}>CIVIL</button>
         </form>
         </div>*/}
            {/*<select onChange={inputEvent2}>
                <option defaultValue value="recent">Recent</option>
                <option value="orTags">Or Tags</option>
                <option value="andTags">And Tags</option>                
                <option value="RefNo">Ref No.</option>
            </select>
            <input type="text" placeholder='Enter Tags or Ref No' onChange={inputEvent1}></input>
  <button className={style.btn}>Find</button>*/}
  <Nav fill variant="tabs">
      
      <Nav.Item>
        <Nav.Link eventKey={FilterCSE} onClick={FilterCSE} className={style.textName}>CSE</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={FilterIT} onClick={FilterIT} className={style.textName}>IT</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={FilterECE} onClick={FilterECE} className={style.textName}>ECE</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={FilterCIVIL} onClick={FilterCIVIL} className={style.textName}>CIVIL</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={FilterMECH} onClick={FilterMECH} className={style.textName}>ME</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={FilterEE} onClick={FilterEE} className={style.textName}>EE</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={FilterCSBS} onClick={FilterCSBS} className={style.textName}>CSBS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={FilterAIML} onClick={FilterAIML} className={style.textName}>AIML</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={FilterIOT} onClick={FilterIOT} className={style.textName}>CSE(IOT)</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={FilterMGMT} onClick={FilterMGMT} className={style.textName}>MGMT.</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={FilterBCA} onClick={FilterBCA} className={style.textName}>BCA</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={FilterBSC} onClick={FilterBSC} className={style.textName}>BSC</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={FilterCLUBS} onClick={FilterCLUBS} className={style.textName}>Clubs & Committies</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={FilterFACULTY} onClick={FilterFACULTY} className={style.textName}>Faculty & Staff</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}
