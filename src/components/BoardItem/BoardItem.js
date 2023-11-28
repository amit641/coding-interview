import React from "react";
import "./BoardItem.css";
import { useDrag } from "react-dnd";

function BoardItem({ id, description, index }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "boardItem",
    item: { id, description, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={dragRef} className="board-item-container">
      <p>{description}</p>
    </div>
  );
}

export default BoardItem;
