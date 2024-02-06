import React from "react";

function CustomButton(props){
  return(
    <button className={props.btnColor}>{props.btnName}</button>
  )
}

export default CustomButton