import React from 'react'

const DetailsAlbumRechercheComponent = ({ imageAlbum, genreAlbum, yearAlbum, titleAlbum }) => (
    <div id='carDetailAlbum' className='card'>
        {/* <h1>Ajouter les musiques a votre Playlist</h1> */}
        <img class='card-img-top' src={imageAlbum} alt='Card image cap' />
        <div class='card-body'>
            <h3 class='card-text'>{titleAlbum}</h3>
            <span class='card-text'>{yearAlbum}</span>
            <span class='card-text'>{genreAlbum}</span>
        </div>
    </div>
)

export default DetailsAlbumRechercheComponent
