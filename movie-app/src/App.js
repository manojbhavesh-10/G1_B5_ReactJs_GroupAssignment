import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
import MovieDetails from "./components/MovieDetails";


function App() {
  const [movies, setMovies] = useState([
    {
      "Title": "Jailer",
      "Year": "2023",
      "imdbID": "tt11663228",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzFkNmZkMTctYjRhMS00ODZiLWFlNjQtZmZmN2IzMDJlNmVkXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_SX300.jpg"
    },
    {
      "Title": "Jawan",
      "Year": "2023",
      "imdbID": "tt15354916",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjM2MjE4NWYtOTc1MC00ZDliLWIzYmYtNzNjMTU2Yzg4ODNlXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg"
    },
    {
      "Title": "Ponniyin Selvan: Part Two",
      "Year": "2023",
      "imdbID": "tt22444570",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmQ3NGM5ODMtNDhjYS00MDQwLWEwNjItNjZiNjdkMmQ3NjQzXkEyXkFqcGdeQXVyMTY0MDk0NjE3._V1_SX300.jpg"
    },
    {
      "Title": "Adipurush",
      "Year": "2023",
      "imdbID": "tt12915716",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGY3YmVmN2UtNWZiNy00YTRlLTlhOTItNzlkZmFmZDA1N2QzXkEyXkFqcGdeQXVyMTU4Mzg1OTU2._V1_SX300.jpg"
    },
    {
      "Title": "Pathaan",
      "Year": "2023",
      "imdbID": "tt12844910",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTgzNjBjYTctOGJiZi00MTliLTk0YzYtNDJmYTQyMDdkMjQ5XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_SX300.jpg"
    },
    {
      "Title": "The Kerala Story",
      "Year": "2023",
      "imdbID": "tt24268454",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzllZDVjN2EtN2M1OS00YTlkLWE0MWYtMTliMDFiODY5YmMxXkEyXkFqcGdeQXVyNTI0NzU5ODc@._V1_SX300.jpg"
    },
    {
      "Title": "Kushi",
      "Year": "2023",
      "imdbID": "tt15380630",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmU2Nzc2ZmItMTc5ZS00ZTE5LWEyOTMtMzIwYjBkNTI3Mjg4XkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg"
    },
    {
      "Title": "Farzi",
      "Year": "2023",
      "imdbID": "tt15477488",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNThlNGZjZDQtYzJjMi00MzM4LWFkNjctNDMwZmFjNWJkM2I4XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_SX300.jpg"
    },
    {
      "Title": "Dada",
      "Year": "2023",
      "imdbID": "tt25405130",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjE0OWNlYjEtNTNlNi00MDBkLTg3MDEtYjYxMWE4MWMyYTRmXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg"
    },
    {
      "Title": "Good Night",
      "Year": "2023",
      "imdbID": "tt26691319",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmIxMzAzOTEtY2QyZi00YzBkLThiM2ItM2I5YzNhYzM2ZTJlXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_SX300.jpg"
    }
  ]);

  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedMovie, onMovieSelect] = useState("");


// get the data from the api call
  const getMovieRequest = async (searchValue) => {
    const url = `https://omdbapi.com/?s=${searchValue}&apikey=4c27d675`;

    const respone = await fetch(url);
    const data = await respone.json();
    console.log(searchValue);
    if(data.Search) {
      setMovies(data.Search);
    }   
  };

  useEffect( () => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addFavouriteMovie = (movie) => {
    const newFavouritesList = [...favourites, movie];
    setFavourites(newFavouritesList);
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouritesList = favourites.filter(
        ( favourite ) => favourite.imdbID !== movie.imdbID
    ); 
    setFavourites(newFavouritesList);
  }

  return (

    <div className="container-fluid movie-app">
        
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Movie App"/>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>


        { 
          selectedMovie && 
            <MovieDetails 
              selectedMovie={selectedMovie}
              onMovieSelect = {onMovieSelect}
            />
        }


        <div className="row">
          <MovieList 
            movies = {movies} 
            handleFavouritesClick = {addFavouriteMovie}
            favouriteComponent = {AddFavourites} 
            onMovieSelect = {onMovieSelect}
          />
        </div> 

        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Favourites"/>
        </div> 

        <div className="row">
          <MovieList 
            movies = {favourites} 
            handleFavouritesClick = {removeFavouriteMovie}
            favouriteComponent = {RemoveFavourites} 
            onMovieSelect = {onMovieSelect}
          />  
        </div> 

    </div>
  );
}

export default App;
