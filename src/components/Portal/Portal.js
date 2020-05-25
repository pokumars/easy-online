import React from 'react'
import './Portal.css'

const Portal = ({ name, icon, url, alt}) => {
  return (
    <div className="portal">
       <a href={url}>
          <img src={require(`../../graphics/${icon}`)} alt={alt} />
          {name}
        </a>      
    </div>
  )
}

export default Portal
