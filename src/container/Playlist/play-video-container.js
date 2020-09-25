import React, { Component } from 'react'
import PlayList from '../../service/Playlist'

class PlayVideoContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            youtubeUriTracks: []
        }
    }

    componentDidMount () {
        const tracks = this.props.handleTackArray
        const newTracksArray = []
        tracks.map(item => {
            newTracksArray.push({
                uri: item.uri,
                title: item.title
            })
        })

        this.setState({ youtubeUriTracks: newTracksArray })
    }

    render () {
        return (
            <div id='divContainerVideoYoutube'>
                <PlayList tracks={this.state.youtubeUriTracks} />
            </div>
        )
    }
}

export default PlayVideoContainer
