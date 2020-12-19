import React from 'react';
import stateGuidelines from '../data/covid-state-data';
import '../styles/guidelines.css';

const Guidelines = () =>  {
    return (
        <div className="guidelines">
            {stateGuidelines.map((stateGuidelines, index) => (
                <div className="state-info">
                <div className="state-name">{stateGuidelines.stateName}</div>
                <div className="covering">Face Coverings: {stateGuidelines.faceCovering}</div>
                <div className="large-gatherings">Large Gatherings: {stateGuidelines.largeGatherings}</div>
                </div>
            ))
            }
            
        </div>
    );
};

export default Guidelines;