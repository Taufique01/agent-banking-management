import { useState } from "react";
import { Status } from "./status";

export const useAddDataClient = (url) => {
  const [status, setStatus] = useState(Status.NotStarted);

  return {
    status: status,
    addNewData: async (data) => {
      setStatus(Status.Pending);
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        setStatus(Status.Success);
        return;
      }
      setStatus(Status.Error);
    },
  };
};
