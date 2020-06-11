import React from 'react'
import './Movies.css'



const Movies = ({handleClick,id,title,category,likes,dislikes}) => {

    return (
          <figure className="movie-container">
              <img className="movie-img" href="" src="https://via.placeholder.com/300"></img>
          <div className="desctiption">
            <h1 className="movie-title">{title}</h1>
            <p>{category}</p>
          </div>
          <button className="movie-button-delete" onClick={() => handleClick(id)}>X</button>
        </figure>
    )
}

export default Movies