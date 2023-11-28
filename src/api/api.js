import { data } from "../data/data";
export const fetchDashboardData = () => {
  return new Promise((resolve) => resolve(data));
};
