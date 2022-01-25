import "./../styles/cost.css";
import { GenericCostRevenue } from "./GenericCostRevenue";

const fetchRevenueUrl = "api/revenue/";
const saveRevenueUrl = "api/revenue/create/";

export function Revenue() {
  return (
    <GenericCostRevenue fetchUrl={fetchRevenueUrl} saveUrl={saveRevenueUrl} />
  );
}
