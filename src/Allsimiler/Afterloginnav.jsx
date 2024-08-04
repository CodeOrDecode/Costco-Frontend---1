import React from "react";
import style from "../Css/Afterloginnav.module.css";
import { LiaSearchSolid } from "react-icons/lia";
import { FaCartShopping } from "react-icons/fa6";

const Afterloginnav = () => {
  return <div>
  <p className={style.p1}>
    July Online-Only Savings End Tomorrow, Shop Now!
  </p>
  <div className={style.list}>
    <div className={style.list1}>
      <p>Costco Next</p>
      <p>While Supplies Last</p>
      <p>Online-Only</p>
      <p>Treasure Hunt</p>
      <p>What's New</p>
      <p>Member Favorites</p>
      <p>New Lower Prices</p>
      <p>Get Email Offers</p>
      <p>Customer Service</p>
    </div>

    <div className={style.list2}>
      <img
        src="https://cdn.bfldr.com/56O3HXZ9/at/553g6bjwwxqg9rw7vsfm64n4/costco-logo-usbc.svg?auto=webp&format=jpg"
        alt=""
      />
      <LiaSearchSolid className={style.search1} />

      <input type="text" placeholder="Search" />

      <p className={style.signin}>Logout</p>
      <p className={style.order}>Orders &amp; Returns</p>
      <FaCartShopping  className={style.carticon}/>
      <p className={style.cart}>Cart</p>
    </div>
  </div>

  <div className={style.category}>
    <p>Shop</p>
    <p>Grocery</p>
    <p>Same Day</p>
    <p>Deals</p>
    <p>Business Delivery</p>
    <p>Optical</p>
    <p>Pharmacy</p>
    <p>Services</p>
    <p>Photo</p>
    <p>Travel</p>
    <p>Membership</p>
    <p>Locations</p>

  </div>
</div>
}

export default Afterloginnav