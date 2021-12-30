export const useAddCustomerClient = () => {
  return {
    status: "Not Initiated",
    addNewCustomer: (customerDetails) => {
      console.log("customer det", customerDetails);
    },
  };
};
