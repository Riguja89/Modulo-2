import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies, addMovieFavorite} from "../../actions";



export class Buscador extends Component {
  constructor(props) {
    super(props); // porque extiende de componente
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }
  toFavourites(movie){
    //console.log(movie.Title);
    this.props.addMovieFavorite(movie)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" >BUSCAR</button>
        </form>
        <ul>
         {this.props.movies && this.props.movies.map(movie=>(
           <div key={movie.imdbID} >
             <Link to={ `/movie/${movie.imdbID}`}>
               {movie.Title}
             </Link>
             <button onClick={()=>this.toFavourites(movie)} >Favoritas</button>
           </div>
         ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    movies: state.moviesLoaded,
    favorites: state.moviesFavorites
  }
}

function mapDispachToProps(dispatch){
  return{
    getMovies: title=>dispatch(getMovies(title)),
    addMovieFavorite: movie=>dispatch(addMovieFavorite(movie))
  }
}
export default connect(mapStateToProps,mapDispachToProps) (Buscador);


// a continuacion como componente de funcion

// export default function Buscador({prop1, prop2}){

//   const [title, setTitle= useState  ('')]

//   let handleChange=(e)=>{
//     setTitle(e.target.value);
//   }

//   let handleSubmit=(e)=>{
//     e.preventDefault();
//   }

//   return(
    
//       <div>
//         <h2>Buscador</h2>
//         <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
//           <div>
//             <label className="label" htmlFor="title">Película: </label>
//             <input
//               type="text"
//               id="title"
//               autoComplete="off"
//               value={title}
//               onChange={(e) => this.handleChange(e)}
//             />
//           </div>
//           <button type="submit" onClick={ }>BUSCAR</button>
//         </form>
//         <ul>
      
//         </ul>
//       </div>

//   )

//}