import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './container/app'

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/navbar.css'
// import './css/style.css'
import './css/accueil.css'
import './css/recherche.css'
import './css/card-play-list.css'
import './component/accueil/animation-nav-bar'
import './component/playlist/animation-card-play-list'

const rootElement = document.getElementById('app')
ReactDOM.render(
    <App />,
    rootElement
)
