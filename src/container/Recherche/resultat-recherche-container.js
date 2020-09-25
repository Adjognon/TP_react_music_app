import React, { Component } from 'react'

import ResultatRechercheComponent from '../../component/recherche/resultat-recherche-component'

class ResultatRechercheContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div id='divCarPrincipal'>

                {this.props.result.map((item, index) => <ResultatRechercheComponent onClick={this.props.onHandleEachAlbumClick} key={index} textP={item.title} url={item.thumb} masterId={item.master_id} />)}

            </div>

        )
    }
}
export default ResultatRechercheContainer
