import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";

const Button = (props) => {
  const cssClasses = props.btnClasses ? props.btnClasses : "";

  return (
    <button onClick={props.onClick} type={props.btnType} className={cssClasses}>
      {props.btnText && props.btnText}
      {props.icon === "add" && (
        <MdAddBox className="text-[50px] text-slate-800" />
      )}
      {props.icon === "remove" && (
        <RiDeleteBin6Fill className="text-[18px] hover:animate-wiggle relative top-[1px]" />
      )}
      {props.icon === "complete" && (
        <BsCheckLg className="text-[18px] hover:animate-wiggle mr-[10px] relative top-[2px]" />
      )}
    </button>
  );
};

export default Button;
