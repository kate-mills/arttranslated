import React from "react";

const Button = ({txt='Mark Get On It', href="https://www.google.com"}) => {
  return (
    <a href={href}>
      {txt}
    </a>
  )
}

export default Button
