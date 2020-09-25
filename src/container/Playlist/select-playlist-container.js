import React, { Component } from 'react'

import SelectPlayListComponent from '../../component/playlist/select-playlist-component'

class SelectPlayListContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            result: []
        }
    }

    render () {
        if (typeof this.props.handleTackArray !== 'undefined') {
            return (
                <div id='divContainerComponentPlayliste'>
                    {this.props.handleTackArray.map((item, index) => <SelectPlayListComponent onClick={this.props.onHandlePlayClick} key={index} titleTrack={item.title} uriYoutube={item.uri} />)}
                </div>
            )
        } else {
            return <div />
        }
    }
}

export default SelectPlayListContainer
