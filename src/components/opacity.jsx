import React from 'react'

const Opacity = ({show, handleSidebar}) => {
  return (
    <div className={`fixed iset-8 z-20 bg-black/80 ${show ? "animate-show": ''}`} onClick={handleSidebar} />
  )
}

export default Opacity