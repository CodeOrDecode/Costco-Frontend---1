import React from 'react'
import style from "../Css/Login.module.css"

const Login = () => {
  return <>
  <div className={style.banner1}>
    <img
      src="https://signin-ui.costco.com/ecomssoui/32/common/Images/logo-bc-us.svg"
      alt=""
    />
  </div>

  <p className={style.signupp1}>Sign In</p>

  <div className={style.con1}>
    <div>
      <input type="text" style={{marginTop:"30px"}} className={style.signupin} placeholder="Email Address" />
    </div>
    <div>
      <input type="password" className={style.signupin} placeholder="Password" />
    </div>
    
    <button className={style.signupbutton}>Sign In</button>
    <hr className={style.ruller1}/>


    <p className={style.newcome}>New to Costco?</p>

    <button className={style.signupbutton2}>Create Account</button>
  </div>
</>
}

export default Login