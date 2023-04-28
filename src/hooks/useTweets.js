import { useEffect, useState } from "react";
import axios from "axios";

export function useTweets() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getTweets() {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://63976edf77359127a0376fe7.mockapi.io/api/tweets?&page=1&limit=9"
      );
      setTweets(res.data);
      setLoading(false);
    } catch (e) {
      const error = e.AxiosError;
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    getTweets();
  }, []);

  return { tweets, loading, error };
}
