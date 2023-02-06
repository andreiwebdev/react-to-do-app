import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Button = (props) => {
  const cssClasses = props.btnClasses ? props.btnClasses : "";
  const [icon, setIcon] = useState();

  return (
    <button onClick={props.onClick} type={props.btnType} className={cssClasses}>
      {props.btnText && props.btnText}
      {props.icon === "add" && (
        <MdAddBox className="text-[50px] text-slate-800" />
      )}
      {props.icon === "remove" && (
        <RiDeleteBin6Fill className="text-[25px] hover:animate-wiggle" />
      )}
    </button>
  );
};

export default Button;
