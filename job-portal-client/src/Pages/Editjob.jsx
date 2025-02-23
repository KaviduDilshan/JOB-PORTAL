import React from 'react'
import { Link, useParams } from 'react-router-dom';

function Editjob() {

    const{id} = useParams()
    console.log('Edit job:', id)

  return (
    <div>Editjob</div>
  )
}

export default Editjob