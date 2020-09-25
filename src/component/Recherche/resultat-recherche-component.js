import React from 'react'
// const ContainerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: 300
// }

const ResultatRechercheComponent = ({ textP, url, masterId, onClick }) => (

    <div id='divCardResultatRecherche' className='container'>
        <div className='card'>
            <img className='card-img-top' src={url} alt='Card image cap' />
            <div className='card-body'>
                <h3 className='card-text'>{textP}</h3>
                <hr />
                <button id='select_each_album' type='button' className='btn btn-primary' onClick={onClick} data-key={masterId}>Details</button>
            </div>
        </div>
        <br /> <br />
    </div>

)

export default ResultatRechercheComponent
