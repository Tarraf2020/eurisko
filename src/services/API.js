import axios from "axios";

export const fetchData = async (page, auth) => {
  try {
    const response = await axios.get(`/articles?page=${page}`, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    return (response.data.response);
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
  }
};
