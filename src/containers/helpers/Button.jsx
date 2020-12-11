import React from 'react'

export default function Button({ currentScreen, screenName, onClick, bgRequired }) {
  const className = bgRequired ? 'header__btns__btn header__btns__btn--bg' : 'header__btns__btn'
  const style = !bgRequired ? {
    color:
      currentScreen === screenName
        ? "#6D6AFE"
        : "black",
  } : { color: 'white' }
  return (
    <button
      className={className}
      onClick={() => onClick(screenName)}
      style={style}
    >
      {screenName.charAt(0).toUpperCase() + screenName.substr(1).toLowerCase()}
    </button>
  )
}
