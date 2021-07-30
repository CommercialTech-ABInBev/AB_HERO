import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Bottle from "../../Assets/Bottles_plus_lOGO.svg"
import Logo from "../../Assets/Logo.png"
import Scroll from "../../Assets/scroll.svg"
import * as htmlToImage from 'html-to-image';


import "./Create.scss"
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'

function CreateImage() {
  const history = useHistory()
  const user = JSON.parse(localStorage.getItem("user"))
  const [shareButton, setShareButton] = useState(true)
  const [shareImage, setShareImage] = useState(null)
  

  useEffect(() => {
    if(user === undefined || user === null ) {
      history.push("/")
    }
  })

  const uploadImageToCloudinary = async (file) => {
    const data = new FormData()
    data.append("file", file)
    data.append("upload_preset", "umfs48jg")
    const res = await fetch("https://api.cloudinary.com/v1_1/dpregnexq/image/upload", {
      method: "POST",
      body: data
    })
    return res.json()
  }

  

  const preDownload = async () => {
    download()
  }

  const download = useCallback(() => {
    let node = document.querySelector('.imageHolder');
    let poster = document.querySelector('.poster');

    htmlToImage.toPng(node)
      .then(async function (dataUrl) {
        if(shareImage === null) {
          console.log(shareImage)
          const res = await  uploadImageToCloudinary(dataUrl)
          return setShareImage(res.secure_url)
        } else {
          poster.href = dataUrl;
          poster.click()
        }
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }, [shareImage])

  useEffect(() => {
    download()
  },[download])

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
        <p>Your banner is ready</p>
        <span className="span">Kindly click the button below to download</span>
        <button onClick={() => preDownload()}>
          download
        </button>
        {shareButton ? <button className="btn2" onClick={() => setShareButton(false)}>
          share
        </button> :
        <div className="socials">
          <FacebookShareButton url={shareImage}>
            <FacebookIcon round={true}/>
          </FacebookShareButton>
          <WhatsappShareButton  url={shareImage}>
            <WhatsappIcon round={true}/>
          </WhatsappShareButton>
          <TwitterShareButton url={shareImage}>
            <TwitterIcon round={true}/>
          </TwitterShareButton>
        </div>}
      </div>
    </div>
  )
}

export default CreateImage
