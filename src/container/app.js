import React, { Component } from 'react' // importer librairie react
import { Button } from '@material-ui/core'

import NavBarContainer from './accueil/nav-bar-container' // importer le composant navbar

import AccueilContainer from './accueil/accueil-container'

import RechercheContainer from './recherche/recherche-container'

import PlayListContainer from './playlist/play-list-container'

import 'bootstrap/dist/css/bootstrap.min.css'

import Discogs from '../service/discogs'

import ResultatRechercheContainer from '../container/Recherche/resultat-recherche-container'

class App extends Component { // composant container qui est le formualaire 'Contenant'
    constructor (props) {
        super(props)

        this.state = {
            container: 'accueil',
            playlistId: '',
            result: []
        }

        this.handleRechercheOnClick = this.handleRechercheOnClick.bind(this)
        // this.handlePlayListOnClick = this.handlePlayListOnClick.bind(this)
        this.handleAccueilOnClick = this.handleAccueilOnClick.bind(this)
        this.handleAlbumOnClick = this.handleAlbumOnClick.bind(this)
        this.handleAjoutTrackOnClick = this.handleAjoutTrackOnClick.bind(this)
        this.handleSelectionTrackOnClick = this.handleSelectionTrackOnClick.bind(this)
    }

    handleRechercheOnClick (event) {
        event.preventDefault()
        const rechercheInput = document.getElementById('barreRecherche').value
        const DiscogsMusic = new Discogs('pQzAZbFqlwSWOJDgKaUysMarTUaZmCEcuJmbqCZA')
        if (rechercheInput !== '') {
            DiscogsMusic.search(rechercheInput, (data) => {
                if (data.results.length > 0) {
                    this.setState({ container: 'recherche', result: data.results })
                } else {
                    alert('Aucun resultat ne correspond a votre recherche')
                }
            })
        } else {
            alert('Champ de recherche vide')
        }
    }

    handleAccueilOnClick () {
        this.setState({ isPlayListOpen: false })
    }

    handleAlbumOnClick () {

    }

    handleSelectionTrackOnClick () {

    }

    handleAjoutTrackOnClick (event) {
        event.preventDefault()
        console.log('ajout track')
    }

    componentDidMount () {
        document.getElementById('btnPlaylist').addEventListener('click', (event) => {
            this.state.playlistId = document.getElementById('inputGroupSelect04').value
            const playListId = document.getElementById('inputGroupSelect04').value
            if (playListId !== '-1') {
                this.setState({ container: 'playlist', result: [], playlistId: document.getElementById('inputGroupSelect04').value })
            } else {
                alert('Veuillez choisir une playlist pour afficher son contenu')
            }
        })
    }

    render () {
        const BUTTONS = [{
            handleOnClick: this.handlePlayListOnClick
        }]
        let nextContainer = ''

        switch (this.state.container) {
        case 'accueil':
            nextContainer = <AccueilContainer />
            break
        case 'recherche':
            nextContainer = <RechercheContainer result={this.state.result} />
            break
        case 'playlist':
            nextContainer = <PlayListContainer playlistId={this.state.playlistId} />
            break
        default:
            nextContainer = <AccueilContainer />
        }

        return (
            <div>
                <div>

                    <NavBarContainer onHandleRechercheOnClick={this.handleRechercheOnClick} buttons={BUTTONS} />

                </div>
                <div>
                    {nextContainer}
                </div>

            </div>
        )
    }
}

export default App
