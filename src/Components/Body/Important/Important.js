import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Important.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';



function Important() {

  const [notices, setNotices] = useState([]);
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
    loadNotices('/api/notice/OrTags?Tags=OTHERS');
  }, [])

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div className="main-slide">
      <Carousel>

        {notices.map(noticeInfo =>
          <Carousel.Item interval={1000} key={noticeInfo._id}>
            <div className="newCode">
              <h2 className="noticeSubject" onClick={() => window.open(`http://localhost:5000/api/admin/view?RefNo=${noticeInfo.RefNo}`, "_blank")}>{noticeInfo.Subject}</h2>
              <p> &nbsp;{noticeInfo.IssueDate.substring(0, 10)}&nbsp;</p>
              <Badge pill bg="danger" className="flag">&nbsp; {noticeInfo.PostedBy} &nbsp;</Badge>{' '}
            </div>
          </Carousel.Item>
        )}

      </Carousel>
    </div>
  )
}

export default Important;