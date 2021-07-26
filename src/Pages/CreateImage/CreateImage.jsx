import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Bottle from "../../Assets/Bottles_plus_lOGO.svg"
import Logo from "../../Assets/Logo.png"
import Scroll from "../../Assets/scroll.svg"
import * as htmlToImage from 'html-to-image';


import "./Create.scss"

function CreateImage() {
  const history = useHistory()
  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    if(user === undefined || user === null ) {
      history.push("/")
    }
  })

  const download = () => {
    let node = document.querySelector('.imageHolder');
    let poster = document.querySelector('.poster');

    htmlToImage.toPng(node)
      .then(function (dataUrl) {
        poster.href = dataUrl;
        poster.click()
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }

  return (
    <div className="body2">
      <div className="imageHolder">
        <div className="title">
          <h1>{user.name}</h1>
        </div>
        <div className="image_logo">
          <img src={Logo} alt="" />
        </div>
        <div className="forHeroes">
          <span>FOR</span>
          <span className="heroes">HEROES</span >
        </div>
        <div className="bottle">
          <img src={Bottle} alt="" />
        </div>
        <div className="details">
          <img src={Scroll} alt="" />
        </div>
      </div>
      <div className="overlay"></div>
      <div className="download">
        <a className="poster"  href="/" download="poster">null</a>
        <p>Your banner is ready</p><br/>
        <span className="span">Kindly click the button below to download</span>
        <button onClick={download}>
          download
        </button>
      </div>
    </div>
  )
}

export default CreateImage
