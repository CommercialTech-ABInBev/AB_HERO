import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Bottle from "../../Assets/Bottles plus lOGO.png"
import NoSugar from "../../Assets/Non Sugar Added.png"
import Logo from "../../Assets/Trophy Logo.png"
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
    <div className="body">
      <div className="imageHolder">
        <div className="title">
          <h1>{user.name}</h1>
        </div>
        <div className="image_logo">
          <img src={Logo} alt="" />
        </div>
        <div className="bottle">
          <img src={Bottle} alt="" />
        </div>
        <div className="last_footer">
          <p className="first">Brewed with Honour</p>
          <p className="second">Drink Responsibly. Not for Sale to Persons Under the Age of 18.</p>
        </div>
        <div className="details">
          <div className="text">
            <p>I am a certified <b>Honourable</b></p>
            <p>I sell Trophy Lager beer</p>
            <p>You can now buy your refreshing</p>
            <p>Trophy Lager at 2 for <b className="price">N450</b> in my bar.</p>
            <h1>Get certified too.</h1>
          </div>
        </div>
        <div className="no_sugar">
          <img src={NoSugar} alt="" />
        </div>
      </div>
      <a className="poster"  href="/" download="poster">null</a>
      <button onClick={download}>
        download
      </button>
    </div>
  )
}

export default CreateImage
