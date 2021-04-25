import React from 'react'
import ListOne from './ListOne'
import { Link } from 'react-router-dom'

const ListView = ({ data, handleClick }) => {
  return (
    <div className="main">
      {data.map((ele) => {
        return (
          <Link key={ele.id} to="/detail">
            <ListOne {...ele} handleClick={handleClick} />
          </Link>
        )
      })}
    </div>
  )
}

export default ListView
