import React from "react";
import style from "../Css/Signup.module.css";

const Signup = () => {
  return (
    <>
      <div className={style.banner1}>
        <img
          src="https://signin-ui.costco.com/ecomssoui/32/common/Images/logo-bc-us.svg"
          alt=""
        />
      </div>

      <p className={style.signupp1}>Create Account</p>

      <div className={style.con1}>
        <div>
          <input type="text" style={{marginTop:"30px"}} className={style.signupin} placeholder="Email Address" />
        </div>
        <div>
          <input type="password" className={style.signupin} placeholder="Password" />
        </div>

        <div>
          <input type="password"  className={style.signupin} placeholder="Confirm Password" />
        </div>
        <div>
          <input type="number"  className={style.signupin} placeholder="Membership Number (optional)" />
        </div>
        
        <button className={style.signupbutton}>Create Account</button>
        <p className={style.signupalready}>Already have an account? <span className={style.gotosignin}>Sign In</span></p>
      </div>
    </>
  );
};

export default Signup;
