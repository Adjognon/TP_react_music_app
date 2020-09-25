import React, { Component } from 'react'

import SelectPlayListContainer from './select-playlist-container'
import PlayVideoContainer from './play-video-container'

class PlayListContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            displayYoutubeFrame: false,
            trackArray: []
        }

        this.handlePlayClick = this.handlePlayClick.bind(this)
    }

    handlePlayClick (event) {
        this.setState({
            displayYoutubeFrame: true
        })
    }

    componentDidMount () {
        const URL = '/playlists/tracks/' + this.props.playlistId
        fetch(URL, { method: 'GET' })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ trackArray: responseJson })
            })
    }

    render () {
        return (
            <div id='divContainerAllPlaylist'>
                <div>
                    <SelectPlayListContainer playlistId={this.props.playlistId} onHandlePlayClick={this.handlePlayClick} handleTackArray={this.state.trackArray} />
                </div>
                <div>
                    {(this.state.displayYoutubeFrame === true) ? <PlayVideoContainer handleTackArray={this.state.trackArray} /> : ''}
                </div>
            </div>
        )
    }
}

export default PlayListContainer
