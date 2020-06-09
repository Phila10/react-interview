import React from 'react'
import './Movies.css'



const Movies = ({handleClick,id,title,category,likes,dislikes}) => {

    return (
    <div className="movie-container">
        <h1 className="movie-title">{title}</h1>
        <p>{category}</p>
        <p>{likes}</p>
        <p>{dislikes}</p>
        <button onClick={() => handleClick(id)}>X</button>


    </div>
    )
}

export default Movies