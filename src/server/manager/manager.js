const dao = require('../modelDB/dao')

const trackList = class TrackList {
    static getData (playlistId) {
        let pgJsonResult = null
        return new Promise(resolve => {
            dao.connect()
            dao.query('SELECT * FROM track WHERE playlist_id = $1', [playlistId], (result) => {
                if (result.rowCount > 0) {
                    pgJsonResult = result.rows
                } else {
                    pgJsonResult = []
                }
                resolve(pgJsonResult)
                dao.disconnect()
            })
        })
    }
}

const playListGenres = class PlayListGenres {
    static getData () {
        let pgJsonResult = null
        return new Promise(resolve => {
            dao.connect()
            dao.query('SELECT * FROM playlist', [], (result) => {
                if (result.rowCount > 0) {
                    pgJsonResult = result.rows
                } else {
                    pgJsonResult = []
                }
                resolve(pgJsonResult)
                dao.disconnect()
            })
        })
    }
}

const ajoutToPlayList = class AjoutToplayList {
    static addData (trackObject) {
        let pgJsonResult = null
        const values = [trackObject.playlist_id, trackObject.title, trackObject.uri, trackObject.master_id]

        return new Promise(resolve => {
            dao.connect()
            dao.query('SELECT * FROM playlist WHERE id = $1', [trackObject.playlist_id], (result1) => {
                if (result1.rowCount > 0) {
                    dao.query('INSERT INTO track(playlist_id, title, uri, master_id) VALUES($1, $2, $3, $4)', values, (result2) => {
                        if (result2.rowCount > 0) {
                            pgJsonResult = { operation: '200' }
                        } else {
                            pgJsonResult = { operation: '505' }
                        }
                        resolve(pgJsonResult)
                        dao.disconnect()
                    })
                } else {
                    pgJsonResult = { erreur: '409' }
                    resolve(pgJsonResult)
                    dao.disconnect()
                }
            })
        })
    }
}

module.exports = {
    trackList,
    playListGenres,
    ajoutToPlayList
}
