import React, { useState } from "react";
import "./Board.css";
import { useDrop } from "react-dnd";
import BoardItem from "../BoardItem/BoardItem";
import { useDispatch, useSelector } from "react-redux";
import {
  setDashboardData,
  getDashboardData,
} from "../../store/dashboard/dashboardSlice";

function Board({ title, tasks, dashboardData }) {
  const [basket, setBasket] = useState();
  const [{ isOver }, dropRef] = useDrop({
    accept: "boardItem",
    drop: (item) => updateDashboardData(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const updateDashboardData = (item) => {
    console.log(item);
  };

  const boardItemRenderer = () => {
    return tasks?.map((task, index) => {
      return (
        <BoardItem
          draggable
          key={task.id}
          id={task.id}
          index={index}
          description={task.description}
        />
      );
    });
  };

  return (
    <div className="board-container" ref={dropRef}>
      <h2>{title}</h2>
      {boardItemRenderer()}
    </div>
  );
}

export default Board;
