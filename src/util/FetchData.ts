import axios from "axios";

export const fetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`http://localhost:5050/api/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
