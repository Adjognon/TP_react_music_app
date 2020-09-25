const manager = require('../manager/manager')

const HTTP_OK = 200
const CONTENT_TYPE_JSON = 'application/json'

const tracks = (req, res) => {
    const playlistId = req.params.playlist_id
    manager.trackList.getData(playlistId).then(result => {
        sendData(res, result)
    })
}

const playListGenre = (req, res) => {
    manager.playListGenres.getData().then(result => {
        sendData(res, result)
    })
}

const ajout = (req, res) => {
    let reponseJSON = { operation: '200' }
    const propertites = ['playlist_id', 'title', 'uri', 'master_id']
    const bodyJsonValue = req.body

    try {
        propertites.map(property => {
            if (!Object.prototype.hasOwnProperty.call(bodyJsonValue, property)) {
                throw new Error('Property not found')
            }
        })

        manager.ajoutToPlayList.addData(bodyJsonValue).then(result => {
            sendData(res, result)
        })
    } catch (err) {
        reponseJSON = { erreur: '404' }
        sendData(res, reponseJSON)
    }
}

const sendData = (res, searchJsonData) => {
    res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    res.end(JSON.stringify(searchJsonData, null, 4))
}

module.exports = {
    tracks,
    playListGenre,
    ajout
}
