import React from 'react'

export default function DesignSpots(icon, x, y) {

  return (
    <React.Fragment>
      <div className='design-spots' style={{ top: `${y}%`, left: `${x}%` }}>
        <img src={icon} alt='design-spot' />
      </div>
    </React.Fragment>
  )
}
