import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = (props) => {
    const {selectedMovie} = props;
    const [movieInfo, setMovieInfo] = useState();

    useEffect( () => {
        axios.get(`https://omdbapi.com/?i=${selectedMovie}&apikey=4ce0b95`)
        .then( (respone) => setMovieInfo(respone.data) );
    }, [selectedMovie])
    return (
        <div>
            {
                movieInfo ? 
                     <>
                        <div className="d-flex my-5">
                        <img src={movieInfo?.Poster} alt="movie poster" className="mx-1"/>
                        <table className="table mx-3">
                            <thead>
                                <th>
                                    <h4 className="text-start"><span>{movieInfo?.Title}</span></h4>
                                </th>
                                <th>
                                    <div className="mx-4">
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="30" 
                                            height="30" 
                                            fill="currentColor" 
                                            class="bi bi-x-square-fill" 
                                            viewBox="0 0 16 16"
                                            onClick={() => props.onMovieSelect()}
                                            >
                                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                                        </svg>
                                    </div>
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="row m-0 p-0">
                                        <td>Imdb Rating: <span className="mx-4">{movieInfo?.imdbRating}</span></td>
                                    </th>
                                    <th className="row m-0 p-0">
                                        <td>Year: <span className="mx-4">{movieInfo?.Year}</span></td>
                                    </th>
                                    <th className="row m-0 p-0">
                                        <td>Director: <span className="mx-4">{movieInfo?.Director}</span></td>
                                    </th>
                                    <th className="row m-0 p-0">
                                        <td>Duration: <span className="mx-4">{movieInfo?.Runtime}</span></td>
                                    </th>
                                    <th className="row m-0 p-0">
                                        <td>Genres: <span className="mx-4">{movieInfo?.Genre}</span></td>
                                    </th>
                                    <th className="row m-0 p-0">
                                        <td>Actors: <span className="mx-4">{movieInfo?.Actors}</span></td>
                                    </th>
                                    <th className="row m-0 p-0">
                                        <td className="">Release Date: <span className="mx-4">{movieInfo?.Released}</span></td>
                                    </th>
                                    <th className="row m-0 p-0">
                                        <td>Story line: {movieInfo?.Plot}</td>
                                    </th>
                                </tr>
                                
                            </tbody>
                        </table>
                        </div>
                    </> : 
                    <h3 className="text-center my-5">Loading...</h3>
                } 
        </div>                
        
     );
}
 
export default MovieDetails;