import React, { useState } from "react";
import { useDrop } from "react-dnd";
import TodoItem from "../TodoItem/TodoItem";

const TodoInProgressList = () => {
  const [basket, setBasket] = useState([]);
  const [{ isOver }, dropRef] = useDrop({
    accept: "todo",
    drop: (item) =>
      setBasket((basket) =>
        !basket.includes(item) ? [...basket, item] : basket
      ),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <ul ref={dropRef} className="max-h-[fill] w-full h-full absolute pr-[45px]">
      {basket.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          todo={todo.text}
          time={todo.timePosted}
        />
      ))}
      {isOver && <div>Drop Here!</div>}
    </ul>
  );
};

export default TodoInProgressList;
