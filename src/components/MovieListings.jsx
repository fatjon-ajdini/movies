import React from "react";
import { useState, useEffect } from "react";
import MovieListing from "./MovieListing";

const MovieListings = ({ isHome = false }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("http://localhost:5050/movies");
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  console.log(movies);
  return (
    <>
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieListing key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MovieListings;
