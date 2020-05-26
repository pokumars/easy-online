import React from 'react'
import './PortalList.css'
import Portal from '../Portal/Portal'

const portals = [
  {
    name:"Jobs",
    icon: "jobs.svg",
    url: "jobs",
    alt:"jobs age and magnifying glass"
  },
  {
    name:"Sports",
    icon: "sports.svg",
    url: "sports",
    alt:"abasketball and an american football"
  },
  {
    name:"Corporations",
    icon: "corporate.svg",
    url: "corporate",
    alt:"a corporate building icon"
  },
  {
    name:"Travel",
    icon: "travel.svg",
    url: "travel",
    alt:"person carrying luggage"
  },
  {
    name:"Sports",
    icon: "sports.svg",
    url: "sports",
    alt:"abasketball and an american football"
  },
  {
    name:"Corporations",
    icon: "corporate.svg",
    url: "corporate",
    alt:"a corporate building icon"
  }
]

const PortalList = () => {
  return (
    <div className="portal-list">
      {portals.map(p => {
        return <Portal name={p.name} icon={p.icon} url={p.url} alt={p.alt} key={p.index}/>
      })}
    </div>
  )
}

export default PortalList
