import { useGetDataClient } from "../../clients/getDataClient";
import { SummaryElement } from "./SummaryElement";

const SUMMARY_URL = "api/summary/";

export const HomePage = () => {
  const { response: summaryResponse } = useGetDataClient(SUMMARY_URL);

  return (
    <div className="home-content">
      <div className="overview-boxes">
        <SummaryElement
          title={"Total account balance"}
          value={summaryResponse?.totalBalance}
        />

        <SummaryElement
          title={"Total receivable amount"}
          value={summaryResponse?.totalReceivables}
        />
      </div>
    </div>
  );
};
