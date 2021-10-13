import React from 'react'
import loadingImage from "../images/gif/loading-arrow.gif";

export default function Loading() {
    return (
        <div style={{textAlign:"center"}}>
            <h3>Rooms Data Loading...</h3>
            <img src={loadingImage} alt="loading" />
        </div>
    )
}
