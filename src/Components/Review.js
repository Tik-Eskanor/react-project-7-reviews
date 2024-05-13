import React from "react"
import {FaQuoteRight, FaChevronRight, FaChevronLeft} from "react-icons/fa"

export default function Review({props,nextPerson, prevPerson, randomPerson})
{
    return(
        <article>
            <div className="img-wrapper">
              <FaQuoteRight className="icon"/>
              <img src={props.image} />
            </div>
            <h4>{props.name}</h4>
            <p className="job">{props.job}</p>
            <p className="info">{props.text}</p>
            <div className="nav">
              <button onClick={prevPerson}><FaChevronLeft/></button> <button onClick={nextPerson}><FaChevronRight/></button>  
            </div>
          <center><button onClick={randomPerson}>Suprise me</button></center>  
        </article>
    )
}