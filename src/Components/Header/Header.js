import React from 'react'
import style from './Header.module.css';
import { Link} from 'react-router-dom'
import logo from './AEC.png';
export default function Header() {
  var r = document.querySelector(':root');

  function darkTheme(){
      r.style.setProperty('--bg-main','#0b0e11');
      r.style.setProperty('--bg-body','#222a30');

      r.style.setProperty('--com-heading','white');
      r.style.setProperty('--com-subHeading','#b6aeae');

      r.style.setProperty('--com-01-bg','#black');
      r.style.setProperty('--com-01-bg-fadded','#0b0e118a');
      r.style.setProperty('--com-01-text','#e3c131');
      r.style.setProperty('--com-01-text-switched','#ffd000');
      r.style.setProperty('--com-01-hover','#e3c2317b');
      r.style.setProperty('--com-01-shadow','#ffffff45');


      r.style.setProperty('--com-02-bg','#black');
      r.style.setProperty('--com-02-bg-fadded','#0b0e118a');
      r.style.setProperty('--com-02-text', '#e3c131');
      r.style.setProperty('--com-02-text2','#ffffff');
      r.style.setProperty('--com-02-text-switched','#ffd000');
      r.style.setProperty('--com-02-hover','#e3c2317b');
      r.style.setProperty('--com-02-shadow','#ffffff45');
      
  };
  function lightTheme(){
      r.style.setProperty('--bg-main','white');
      r.style.setProperty('--bg-body','white');

      r.style.setProperty('--com-heading','#1a237e');
      r.style.setProperty('--com-subHeading','black');

      r.style.setProperty('--com-01-bg','#1565c0');
      r.style.setProperty('--com-01-bg-fadded','#e3f2fd');
      r.style.setProperty('--com-01-text','white');
      r.style.setProperty('--com-01-text-switched','#c65403');
      r.style.setProperty('--com-01-hover','#ff80268c');
      r.style.setProperty('--com-01-shadow','#00000026');

      r.style.setProperty('--com-02-bg','#1565c0');
      r.style.setProperty('--com-02-bg-fadded','#e3f2fd');
      r.style.setProperty('--com-02-text', '#ffffff');
      r.style.setProperty('--com-02-text2',' #000000');
      r.style.setProperty('--com-02-text-switched','#1976d2');
      r.style.setProperty('--com-02-hover','#e3f2fd');
      r.style.setProperty('--com-02-shadow','#00000026');
  };

  function login(){
    console.log("Navigating to login Page");
  }
  
  return (
    <div className={style.header_div}>
        
        <Link to="/" style={{ textDecoration: 'none' }} > 
          <img src={logo} className={style.logo} alt="AEC"/>
          <div className={style.main_heading}> Notification Panel   </div>
        </Link>  
        <div className={style.themes }>
          {/* <button onClick={purpleTheme} className={style.purpleBtn}>&nbsp;</button> */}
          <button onClick={login} className={style.lightBtn}>
              <Link to="/Login" style={{ textDecoration: 'none' }} >
                Admin
              </Link>
          </button>
        </div>
        <div className={style.sub_heading}>
            Asansol Engineering College
           
        </div>
        
        
        
    </div>
  )
}
