import React from 'react';
import './tracker.css';

export default function Tracker(props){
    return(
        <p className='tracker'>
            Out of 
                <span className='timesAsked'> {props.timesAsked} </span> 
            times asked, this was answered correctly 
                <span className='correct'> {props.correct} </span>
            times.
        </p>
    )
}