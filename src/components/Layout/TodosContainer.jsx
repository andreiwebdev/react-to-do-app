import React from "react";

const TodosContainer = (props) => {
  return (
    <div className="bg-slate-200 w-full h-full rounded-2xl text-black p-7 text-center relative mb-5 last:mb-0 lg:mb-0 ">
      {props.children}
    </div>
  );
};

export default TodosContainer;
