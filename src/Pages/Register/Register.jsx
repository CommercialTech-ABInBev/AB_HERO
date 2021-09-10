import React, { useState } from 'react'
import "./Register.scss"
import moment from 'moment'
import { useHistory } from "react-router-dom"
import Logo from "../../Assets/Logo.png"
import Text from "../../Assets/Text.png"
import axios from "axios"

function Register() {
  const history = useHistory()
  const [user, setUser] = useState({name: "", address: "", city: "", phone: ""})

  const handleChange = (e) => {
    if(e.target.name === "name"){
      setUser({...user, name: e.target.value})
    }
    if(e.target.name === "address"){
      setUser({...user, address: e.target.value})
    }
    if(e.target.name === "city"){
      setUser({...user, city: e.target.value})
    }
    if(e.target.name === "number"){
      setUser({...user, phone: e.target.value})
    }
  }

  const handleSubmit = async () => {
    localStorage.setItem("user", JSON.stringify(user))
    const body = {
      ...user,
      date: moment().format("MMM Do YY"),
      time: moment().format('LT')
    }
    axios.post("https://sheet.best/api/sheets/e540c3b3-adef-4d5c-9b10-bfad0051faad", body)
    history.push("/image")
  
  }

  return (
    <div className="body">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <form>
        <div className="form_body">
          <label htmlFor="name">Bar Name</label>
          <input onChange={e => handleChange(e)} value={user.name} name="name" type="text" />
        </div>
        <div className="form_body">
          <label htmlFor="address">Address</label>
          <input onChange={e => handleChange(e)} value={user.address}  name="address" type="text" />
        </div>
        <div className="form_body">
          <label htmlFor="city">City</label>
          <input onChange={e => handleChange(e)} value={user.city}  name="city" type="text" />
        </div>
        <div className="form_body">
          <label htmlFor="number">Phone Number</label>
          <input onChange={e => handleChange(e)} value={user.phone} name="number" type="number" />
        </div>
      </form>
      <button onClick={handleSubmit}>Submit</button>
      <div className="img_holder">
        <img src={Text} alt="" />
      </div>
      <div className="footer">
        <p className="second">Drink Responsibly. Not for Sale to Persons Under the Age of 18.</p>
      </div>
    </div>
  )
}

export default Register
