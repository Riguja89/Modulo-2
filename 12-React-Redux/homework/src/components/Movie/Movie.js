import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';

class Movie extends React.Component {

    // constructor(props) {
    //     super(props);
    
    //     this.state = {
    //       movie: undefined,
    //     }
    //   }

    componentDidMount() {
      const movieID = this.props.match.params.id;
      //console.log(this.props.match.params)
      this.props.getMovieDetail(movieID);// sre despacha la accion y se llena el estado de movie detail por lo tanto cambio en las propiedades
      }
      

    render() {
      // console.log(this.props);
        return (
            <div className="movie-detail">
               <h1> {this.props.movie.Title} </h1>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
      movie: state.movieDetail
    }
  }
  
  function mapDispachToProps(dispatch){
    return{
      getMovieDetail: movieID=>dispatch(getMovieDetail(movieID))
    }
  }
  export default connect(mapStateToProps,mapDispachToProps) (Movie);