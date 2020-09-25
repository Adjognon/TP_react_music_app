import React from 'react'

const DetailsRechercheComponent = ({ title, masterId, youtubeUri, index, onClick }) => (
    <div key={index}>

        <div id='divPrincipalDetail'>
            <div>
                <span id='textTitreTrack'>
                    {title}
                    {/* intro - maitre gims */}
                </span>
            </div>
            <div>
                <div id='divIconeAjoutPlaylist'>
                    <div> <img id='iconeAjoutPlaylist' src='icone/image-ajout/icone_ajout_playlist.png' alt='image pour ajoutMusique' onClick={onClick} data-masterId={masterId} data-uri={youtubeUri} data-title={title} /></div>
                    <div> <p id='textAjout'>ajouter a la playlist</p></div>

                </div>
            </div>

        </div>

    </div>

)

export default DetailsRechercheComponent
