import React from "react";
import "./Dashboard.css";
import Board from "../Board/Board";
import { getDashboardData } from "../../store/dashboard/dashboardSlice";
import { useSelector } from "react-redux";

function Dashboard() {
  const dashboardData = useSelector(getDashboardData);
  console.log("dashboardData: ", dashboardData);

  const boardRenderer = () => {
    return dashboardData?.data?.map((item) => {
      return (
        <Board
          key={item.id}
          title={item.title}
          tasks={item.children}
          dashboardData={dashboardData}
        />
      );
    });
  };

  return <div className="dashboard-container">{boardRenderer()}</div>;
}

export default Dashboard;
