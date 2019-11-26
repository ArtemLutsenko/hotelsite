import React from 'react'
import loadinGif from '../../images/gif/loading-arrow.gif'

const Loading = () => {
    return (
        <div className = "loading">
            <h4>rooms data loading...</h4>
            <img src={loadinGif} alt="loadinGif"/>
        </div>
    )
}

export default Loading
