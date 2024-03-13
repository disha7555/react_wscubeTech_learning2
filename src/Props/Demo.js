import React from 'react'

function Demo(props) {
    const {number}=props; //destructuring
  return (
    <div>
      {number}
    </div>
  )
}

export default Demo
