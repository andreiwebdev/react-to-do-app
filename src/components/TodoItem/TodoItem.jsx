import React from "react";
import Button from "../Button/Button";

const TodoItem = () => {
  return (
    <li>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nostrum?
      <Button
        btnClasses="bg-slate-900 text-white p-2 mb-4"
        type="button"
        btnText="Remove"
      />
    </li>
  );
};

export default TodoItem;
