import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

  import React from 'react'
  import style from './Social.module.css';
  export default function Social() {
    return (
            <div className={style.socialContainer}>
                <a href="https://www.youtube.com/channel/UCUcGoGnfkPxLhyut2I3Jmhw/" className={style.youtube}>
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com/AEC1998/" className={style.facebook}>
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.facebook.com/AEC1998/" className={style.twitter}>
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/asansol_engineering_college/" className={style.instagram}>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
        </div>
    )
  }
  