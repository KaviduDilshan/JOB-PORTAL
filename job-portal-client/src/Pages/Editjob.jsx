import React from 'react'
import { Link, useParams } from 'react-router-dom';

function Editjob() {

    const{id} = useParams()
    console.log(id)

  return (
    <div>Editjob</div>
  )
}

export default Editjob