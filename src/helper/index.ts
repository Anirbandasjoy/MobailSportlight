export const getLocalStorageData = (): number[] => {
  const storedJobApplication = localStorage.getItem("cart-data");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication) as number[];
  }
  return [];
};

export const saveProduct = (id: number): string | undefined | number => {
  const savedJobApplications = getLocalStorageData();
  const exists = savedJobApplications.find((jobId) => jobId === id);

  if (exists) {
    return "Already Applied this product";
  } else {
    savedJobApplications.push(id);
    localStorage.setItem("cart-data", JSON.stringify(savedJobApplications));
    return undefined;
  }
};

export const deleteProduct = (id: number): string => {
  const savedJobApplications = getLocalStorageData();
  const updatedJobApplications = savedJobApplications.filter(
    (jobId) => jobId !== id
  );

  if (savedJobApplications.length === updatedJobApplications.length) {
    return "cart ID not found"; // Return a message if the job ID does not exist
  } else {
    localStorage.setItem(
      "job-application",
      JSON.stringify(updatedJobApplications)
    );
    return "Cart item deleted"; // Return a message if the job ID is deleted
  }
};
