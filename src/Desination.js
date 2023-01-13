import React from "react";

function Destination(props){
  return(
    <div className="destination-wrapper">
      <div className="image-wrapper">
        <img className="destination-img"  src={props.imageURL} alt = "Destination.img" />
      </div>
      <div className="destination-info-wrapper">
        <p className="location"> <img className="location-icon" src="./images/location.svg" alt="location icon"/>{props.location}
        <a className="google-map-link" href="www.google.com">{props.googleMapsLink}</a>
        </p>
        <h1 className="destination-title">{props.title}</h1>
        <p className="date">{props.startDate} - {props.endDate}</p>
        <p className="description">{props.description}</p>
      </div>
      
    </div>
  )
}

export default Destination;