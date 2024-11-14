import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


const Hearts = ({index}) => {
  return (
    <svg className="w-16 h-16   ">
        <FontAwesomeIcon icon={faHeart } style={{ color: 'red' }}/>
      </svg>
    
  )
}

export default Hearts