import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Bottle from "../../Assets/Bottles_plus_lOGO.svg"
import Logo from "../../Assets/Logo.png"
// import Scroll from "../../Assets/scroll.svg"
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
      .then(async function (dataUrl) {
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
          <div className="image_logo">
            <img src={Logo} alt="" />
          </div>
          <h1>{user.name}</h1>
        </div>
        <div className="img_peeps">
          <img src="https://res.cloudinary.com/dpregnexq/image/upload/a_hflip/v1629210079/DONE2_qzajgi.jpg"alt="" />
        </div>
        <div className="heros">
          THE BEER FOR <b>HEROES</b>
        </div>
        <div className="bottle">
          <img src={Bottle} alt="" />
        </div>
        <div className="details">
          <img src="https://res.cloudinary.com/dpregnexq/image/upload/v1629287612/Final_POC_Price_Creative-removebg-preview_pplw5l.png" alt="" />
        </div>
        <div  className="last_footer" >
         <p className="second">Drink Responsible. Not for sale to Persons Under the Age of 18.</p> 
        </div>
      </div>
      <div className="download">
        <a className="poster"  href="/" download="poster">null</a>
        <p>Your banner is ready</p>
        <button onClick={download}>
          download
        </button>
        <div className="share_message">
          <p>Share this image to Facebook, Whatsapp and Instagram after you download your image</p>
          <p className="share">Share the word</p>
        </div>
      </div>
    </div>
  )
}

export default CreateImage
