import { useState, useEffect, useCallback } from "react";

const JOKE_API_URL = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political"

export const useJoke = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(JOKE_API_URL);
      if (!response.ok) throw new Error("Falha na requisição");

      const data = await response.json();

      if (data.type === "single") {
        setJoke(data.joke);
      } else {
        setJoke(`${data.setup} - ${data.delivery}`);
      }
    } catch (err) {
      setError("Não foi possível carregar uma piada no momento.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  return { joke, loading, error, fetchJoke };
};
