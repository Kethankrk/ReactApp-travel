import React from 'react';
import fill from './images/Fill.png'
export default function TravelCard(props){
    console.log(props)
    return(
        <div className='tc'>
            <img src={props.thumbnail} className='tc-img'/>
            <div className='tc-textC'>
                <img src={fill} className='tc-location-icon' />
                <span className='tc-location'>{props.location}</span>
                <span className='tc-gmap'><u>View on Google Maps</u></span>
                <h2 className='tc-h2'>{props.heading}</h2>
                <p className='tc-date'>{props.date}</p>
                <p className='tc-p'>{props.discription}</p>
            </div>
        </div>
    )
}