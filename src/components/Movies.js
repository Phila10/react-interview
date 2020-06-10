import React from 'react'
import './Movies.css'



const Movies = ({handleClick,id,title,category,likes,dislikes, likeHandler}) => {

    return (

    <div className="movie-container">
        <button className="movie-button-delete" onClick={() => handleClick(id)}>X</button>
        <h1 className="movie-title">{title}</h1>
        <p>{category}</p>
        <div className="container-movie-button-like-dislike">
        <button className="movie-button-like">Likes</button>
        <p className="movie-p">{likes}</p>
        <button className="movie-button-dislike" onClick={() => likeHandler}>Dislikes</button>
        <p className="movie-p" >{dislikes}</p>

        </div>
  


    </div>
    )
}

export default Movies