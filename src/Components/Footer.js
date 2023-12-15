import React from 'react'
import "../styles/Footerpg.css"

export default function Footer(props) {
  return (
    <div className={`base bg-${props.mode} text-${props.mode === "light"? "dark":"light"}`}>
        <span className="baseTxt">&copy; 2023 Sparsh All Rights Reserved</span>
    </div>
  )
}
