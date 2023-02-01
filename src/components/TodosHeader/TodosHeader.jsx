import React from "react";
import Button from "../Button/Button";

const TodosHeader = () => {
  return (
    <div className="text-4xl mb-14">
      <h1 className="mb-4">Add a todo</h1>
      <form>
        <input className="bg-slate-50 mr-4" type="text" />
        <Button type="submit" btnText="Add" />
      </form>
    </div>
  );
};

export default TodosHeader;
