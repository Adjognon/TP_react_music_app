'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const tracksControleur = require('./src/server/controleur/tracksControleur')

const PORT = 8080
const app = express()
app.use(express.static('dist'))
app.use(express.static('src/images'))
app.use(bodyParser.json())

app.get('/playlists/tracks/:playlist_id', tracksControleur.tracks)

app.get('/playlists/genres', tracksControleur.playListGenre)

app.post('/playlists/ajout', tracksControleur.ajout)

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
