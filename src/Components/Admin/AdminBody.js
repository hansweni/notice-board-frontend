import React, { useState, useEffect } from 'react'
import AddNotice from '../NoticeOperations/AddNotice';
import DeleteNotice from '../NoticeOperations/DeleteNotice';
import style from './Admin.module.css';
import NoticeCardBrief from '../Body/SearchResult/NoticeCardBrief/NoticeCardBrief';
export default function AdminBody() {
  const [openModel, SetOpenModel] = useState(false);
  const [openModel2, SetOpenModel2] = useState(false);
  const [notices, setNotices] = useState([]);
  const addNotice = () => {
    SetOpenModel(true);
    SetOpenModel2(false);

  }
  const editNotice = () => {
    // console.log("adding Notice");
    // SetOpenModel(true);
  }
  const deleteNotice = () => {
    SetOpenModel(false);
    SetOpenModel2(true);
  }

  const [tags, setTags] = useState('');
  const [type, setType] = useState('orTags');

  const inputEvent1 = (event) => {
    setTags(event.target.value);
  };
  const inputEvent2 = (event) => {
    setType(event.target.value);
  };
  const formSubmit = (event) => {
    // Routing url building Start from here
    let url = '/api/notice'
    if (type === 'orTags' && tags !== '') {
      url = `/api/notice/OrTags?Tags=${tags} ${'OTHERS'}`;
    } else if (type === 'RefNo' && tags !== '') {
      url = `/api/notice/Search?RefNo=${tags}`;
    }else if(type === 'recent'){
      url = '/api/notice'
    }
    loadNotices(url);

    event.preventDefault()
  };

  function loadNotices(url) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let arrData = data.Notices
        setNotices(arrData);

      }
      )
  }

  useEffect(() => {
    loadNotices('/api/notice');
  }, [])

  return (
    <div className={style.adminBody}>

      <button className={style.btn} onClick={addNotice}> Append Notice </button>
      <button className={style.btn} onClick={deleteNotice}> Delete Notice </button>
      <AddNotice open={openModel} onClose={() => SetOpenModel(false)} />
      <DeleteNotice open={openModel2} onClose={() => SetOpenModel2(false)} />
      <h3 className={style.headText}>Notice Dashboard (Admin Console)</h3>
      <div className={style.body}>
        <form onSubmit={formSubmit}>
        <select onChange={inputEvent2}>
          <option defaultValue value="recent">Recent</option>
          <option value="orTags">Tags</option>
          <option value="RefNo">Ref No.</option>
        </select>
        <input type="text" placeholder='Enter Tags or Ref No' onChange={inputEvent1}></input>
        <button className={style.findbtn}>Find</button>
        </form>
        {notices.map(noticeInfo =>
          <div key={noticeInfo._id}>
            <NoticeCardBrief info={noticeInfo} />
          </div>
        )}
      </div>

    </div>
  )
}
