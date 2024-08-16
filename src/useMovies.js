import { useState, useEffect } from "react";
const KEY = "62418533"; //My key for API and Data Fetching

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setISLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      //   callback?.();
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setISLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong to fetch the Movie Data");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not Found");
          setMovies(data.Search);
          // console.log(data.Search);
          setError("");
        } catch (error) {
          setError(error.message); // Set error message to state
          console.error("Error fetching movies:", error); // Print error to console
          if (error.name !== "AbortError") {
            setError(error.message);
          }
        } finally {
          //this help to remove rendering Loading, if the Error is available
          setISLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      //handleCloseMovie();

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
