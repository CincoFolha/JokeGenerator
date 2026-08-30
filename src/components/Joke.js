import React from "react";
import Button from "./Button";
import { useJoke } from "../hooks/useJoke";
import './Joke.css';

const Joke = () => {
  const { joke, loading, error, fetchJoke } = useJoke();

  return (
    <div className="joke">
      <p className="joke-text">
        {loading && "Carregando..."}
        {!loading && error && error}
        {!loading && !error && joke}
      </p>
      <Button callApi={fetchJoke} disabled={loading} />
    </div>
  );
};

export default Joke;
