import React from 'react'
import Movies from './Movies'
import './MoviesList.css'

class MoviesList extends React.Component {
  constructor(props){
    super(props)
  this.state = {

  movie : 
  [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    },
  ]}}

  handleClick = (e) => {
    const newMovie = this.state.movie
    const index = newMovie.findIndex(item => item.id === (e))
    const remove = window.confirm("Etes-vous sûr de bien vouloir retirer ce produit de la liste ?")
    if (remove) {
        newMovie.splice(index, 1)
        this.setState({ movie : newMovie})
    }
}
render() 
{
  return (
    <div className="movieslist-container">
     {this.state.movie.map((id) => (<Movies {...id} handleClick={this.handleClick}/>))}
    </div>
  )
}
}
  
  export default MoviesList;
