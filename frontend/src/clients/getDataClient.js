import { useCallback, useEffect, useState } from "react";
import { Status } from "../clients/status";

export const useGetDataClient = (url) => {
  const [status, setStatus] = useState(Status.NotStarted);
  const [response, setResponse] = useState(undefined);

  const fetchData = useCallback(async () => {
    setStatus(Status.Pending);
    const httpResponse = await fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (httpResponse.status === 200) {
      setStatus(Status.Success);
      const jsonResponse = await httpResponse.json();
      setResponse(jsonResponse);
      return;
    }

    setStatus(Status.Error);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    status,
    response,
    reloadData: fetchData,
  };
};
