import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Covid-info.css';
import '../../../data/covid-state-data';
import '../../../routes/api-routes';

const stateName = req.params.state;
const stateInfo = 

function stateData() {
    return (
        <div>
            <div className="stateName">{ stateName }</div>
            <div className="stateInfo"></div>

        </div>
    )
}

export default stateData;