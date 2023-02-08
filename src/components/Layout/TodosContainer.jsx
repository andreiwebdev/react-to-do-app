import React from "react";

const TodosContainer = (props) => {
  return (
    <div className="bg-slate-200 w-10/12 h-[90vh] rounded-2xl text-black p-7 text-center relative ">
      {props.children}
    </div>
  );
};

export default TodosContainer;
