import axios from "axios";

export const getTweets = async (page = 1, limit = 6) => {
  try {
    const res = await axios.get(
      `https://63976edf77359127a0376fe7.mockapi.io/api/tweets?&page=${page}&limit=${limit}`
    );
    return res.data;
  } catch (e) {
    const error = e.AxiosError;
    return error;
  }
};
