import React from 'react';
import icon from '../../assets/images/icon-location.svg';
import './Card.css';

export default function Card(props) {
  return (
    <div className='card'>
      <img
        className='card-image'
        src={props.imageUrl}
        alt='Mount Fuji'
        width={200}
        loading='lazy'
      />
      <div className='card-content'>
        <p className='card-location'>
          <img src={icon} alt='' width={7} />
          {props.location}
          <a href={props.googleMapsUrl} target='_blank' rel='noreferrer'>
            View on Google Maps
          </a>
        </p>
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-period'>
          {props.startDate} - {props.endDate}
        </p>
        <p className='card-description'>{props.description}</p>
      </div>
    </div>
  );
}
