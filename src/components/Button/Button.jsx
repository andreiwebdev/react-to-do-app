import React from "react";

const Button = (props) => {
  const cssClasses = props.btnClasses ? props.btnClasses : "";

  return (
    <button onClick={props.onClick} type={props.btnType} className={cssClasses}>
      {props.btnText}
    </button>
  );
};

export default Button;
