import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useEffect, useLayoutEffect } from "react";
import { fetchDashboardData } from "./api/api";
import { setDashboardData } from "./store/dashboard/dashboardSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    fetchDashboardData().then(
      (response) => {
        dispatch(setDashboardData(response));
      },
      (error) => {
        console.error("error: ", error);
      }
    );
  }, []);
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Dashboard />
      </DndProvider>
    </div>
  );
}

export default App;
