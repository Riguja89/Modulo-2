import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from '../../actions/index';
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  componentDidMount() {
    // const movieID = this.props.match.params.id;
    console.log(this.props.favorites)
    // this.props.addMovieFavorite(movieID);// se despacha la accion y se llena el estado de movie detail por lo tanto cambio en las propiedades
    }
    eliminarFav(id){
      this.props.removeMovieFavorite(id);
    }

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.favorites && this.props.favorites.map(favorite=>(
           <div key={favorite.imdbID} >
             <Link to={ `/movie/${favorite.imdbID}`}>
               {favorite.Title}
             </Link>
             <button onClick={()=>this.eliminarFav(favorite.imdbID)}>X</button>
           </div>
         ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    favorites: state.moviesFavorites
  }
}

function mapDispachToProps(dispatch){
  return{
    //addMovieFavorite: favorites=>dispatch(addMovieFavorite(favorites)),
    removeMovieFavorite: id=>dispatch(removeMovieFavorite(id))    // estando en este elemento que es lo que quiero que se despache
  }
}



export default connect(mapStateToProps,mapDispachToProps)(ConnectedList);
