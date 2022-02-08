import React from "react";

const DonateBtn = ({txt='Mark Get On It', href="https://www.google.com"}) => {
  return (
    <a href={href} className="donate-btn">
      Donate with {txt}
    </a>
  )
}

export default DonateBtn
