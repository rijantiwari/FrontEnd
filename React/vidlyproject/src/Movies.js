import React, { Component } from 'react'
import {getMovies} from "./services/fakeMovieService";

export default class Movies extends Component {
        state={
            movies:getMovies(),
        }
getMoviesTitle=()=>{
    const movies = this.state.movies;
   for(let i in movies){
        const movObj = movies[i].title;
       return movObj;
   }

}
getMoviesGenre=()=>{
    const movies = this.state.movies;
   for(let i in movies){
        const movObj = movies[i].genre.name;
       return movObj;
   }

}
getMoviesStock=()=>{
    const movies = this.state.movies;
   for(let i in movies){
        const movObj = movies[i].numberInStock;
       return movObj;
   }

}
getMoviesRating=()=>{
    const movies = this.state.movies;
   for(let i in movies){
        const movObj = movies[i].dailyRentalRate;
       return movObj;
   }

}
  render() {
  
    return (
        <>
        <table className='table'>
        <thead>
         <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Stock</th>
          <th scope="col">Rate</th>
         </tr>
        </thead>
        <tbody>
    <tr>
      <th scope="row">{  this.getMoviesTitle()}</th>
      <td>{this.getMoviesGenre()}</td>
      <td>{this.getMoviesStock()}</td>
      <td>{this.getMoviesRating()}</td>
    </tr>
  </tbody>
        </table>
        </>
      
    )
  }
}
