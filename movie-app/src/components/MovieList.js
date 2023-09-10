import React from "react";

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return ( 
        <>
            {props.movies.map ((movie, index) => (
                <div className="row mx-3 my-3 ">
                    <div className="card d-flex justify-content-start image-container"  style={ {width:"18rem"} }>
                        <img src={movie.Poster} className="card-img-top" alt="movie"></img>
                        <h5 className="card-title my-1 text-center" onClick={ () => props.onMovieSelect(movie.imdbID)}>{movie.Title}</h5>

                        <div className="card-body text-center"
                            onClick={() => props.handleFavouritesClick(movie)}>
                            <FavouriteComponent title={movie.title}/>   
                        </div>                       
                    </div>
                </div> 
        ))}          
        </>
     );
}
 
export default MovieList;

/*
  
<div className="col image-container d-flex justify-content-start m-3">
            <img src={movie.Poster} alt="movie"></img>  

            <div 
                onClick={() => props.handleFavouritesClick(movie)} 
                className="overlay d-flex align-items-center justify-content-center">
                <FavouriteComponent title = {movie.Title}/>
            </div> 
</div>

*/
