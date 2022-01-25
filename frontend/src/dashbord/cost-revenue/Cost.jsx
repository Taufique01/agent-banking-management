import "./../styles/cost.css";
import { GenericCostRevenue } from "./GenericCostRevenue";

const fetchCostUrl = "api/costs/";
const saveCostUrl = "api/cost/create/";

export function Cost() {
  return <GenericCostRevenue fetchUrl={fetchCostUrl} saveUrl={saveCostUrl} />;
}
