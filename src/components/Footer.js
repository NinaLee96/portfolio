import React from "react";
import footerStyles from "../styles/footer.module.scss";

//add contact link, linkedin

const Footer = () => {
  return(
    <div className={footerStyles.background}>
      <p className={footerStyles.footer}>This is the footer</p>
      <div className={footerStyles.Contact}>
      </div>
      
    </div>
  )
}



export default Footer;