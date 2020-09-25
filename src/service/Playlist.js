import React, { Component } from 'react'
import YouTube from 'react-youtube'


class Playlist extends Component {
    constructor (props) {
        super(props)


        this.state = {
            index: 0,
            options: {
                height: '390',
                width: '640',
                playerVars: { // https://developers.google.com/youtube/player_parameters
                    autoplay: 0
                }
            }
        }


        this.onEndHandler = this.onEndHandler.bind(this)
        this.nextOnClickHandler = this.nextOnClickHandler.bind(this)
        this.previousOnClickHandler = this.previousOnClickHandler.bind(this)
    }


    onEndHandler () {
        if (this.state.index < this.props.tracks.length - 1) {
            this.setState({
                index: this.state.index + 1,
                options: {
                    ...this.state.options,
                    playerVars: {
                        autoplay: 1
                    }
                }
            })
        }
    }


    nextOnClickHandler () {
        if (this.state.index < this.props.tracks.length - 1) {
            this.setState({
                index: this.state.index + 1
            })
        }
    }


    previousOnClickHandler () {
        if (this.state.index > 0) {
            this.setState({
                index: this.state.index - 1
            })
        }
    }


    getVideoId () {
        let videoId = ''
        if (this.props.tracks.length > 0) {
            const uri = this.props.tracks[this.state.index].uri
            videoId = uri.substring(uri.indexOf('=') + 1)
        }
        return videoId
    }


    onClickHandler (index) {
        this.setState({
            index: index
        })
    }


    render () {
        return (
            <div className='playlist'>
                <div className='row'>
                    <div id="divPrincipalYoutubeAndButton"  className='col'>
                        <div id="containerYoutubeAndButton" className='card'>
                            <YouTube id="youtubevideo"
                                videoId={this.getVideoId()}
                                opts={this.state.options}
                                onEnd={this.onEndHandler}
                            />
                            <div id="containerNavigationAndTitre" className='card-body'>
                                <h5 id="titreCardVideoYoutube" className='card-title'>{this.props.tracks[this.state.index] && this.props.tracks[this.state.index].title}</h5>
                                <div id="divNavigation">
                                    <button class="buttonNavigation" onClick={this.previousOnClickHandler}><i className='fas fa-step-backward' /></button>
                                    <button  class="buttonNavigation" onClick={this.nextOnClickHandler}><i className='fas fa-step-forward' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="listeTitrePlaylist" className='col'>
                        <ul className='list-group'>
                            {this.props.tracks.map((track, index) => <li key={index} onClick={() => this.onClickHandler(index)} className={index === this.state.index ? 'list-group-item list-group-item-dark' : 'list-group-item'}>{track.title}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Playlist