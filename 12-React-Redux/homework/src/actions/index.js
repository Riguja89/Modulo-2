

export function addMovieFavorite(movie) {
    return { type: "ADD_MOVIE_FAVORITE", payload: movie};
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=d1dcdf9c&s=" + titulo)
        .then(response => response.json())  // responde una promesa y se guarda en response.json 
        .then(movie => {
          dispatch({ type: "GET_MOVIES", payload: movie }); // las peliculas se guardan en movie
        });
    };
  }

 export function getMovieDetail(imdbID){
  return function(dispatch) { 
    return fetch(`http://www.omdbapi.com/?apikey=d1dcdf9c&i=${imdbID}`)
      .then(response => response.json())  // responde una promesa y se guarda en response.json 
      .then(detail => dispatch({ type:"GET_MOVIE_DETAIL", payload: detail }) // los detalles quedan guardados en detail
      );
  };
 } 



export function removeMovieFavorite(id){
return{
  type: "REMOVE_MOVIE_FAVORITE", payload: id
}
} 