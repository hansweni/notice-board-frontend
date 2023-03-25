import React from 'react'
import style from './Footer.module.css';
import Social from './SocialFollow/Social';
export default function Footer() {
  return (
    <>
      <div className={style.footer}> 
        <div className={style.left}>&#169; 2022 All Rights Reserved <br/><br/> Handcrafted with ❤️ By <b><i>AEC</i></b></div>
        <div className={style.right}> <Social/> </div>
      </div>
      
    </>
  )
}
