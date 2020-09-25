import React from 'react'

const SelectPlayListComponent = ({ onClick, titleTrack, uriYoutube, index }) => (
    <div id='divContainerCardPlayList' className='container'>

        <div id='cardPlaylist' className='card' onClick={onClick} key={index}>
            <img id='imgLogoCardPlaylist' className='card-img-top' src='icone/logomusic.png' alt='video youtube tracks' />
            <div className='card-body'>
                <h3 className='card-text'>{titleTrack}</h3>
            </div>
        </div>
    </div>

)

export default SelectPlayListComponent
