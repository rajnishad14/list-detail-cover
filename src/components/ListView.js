import React from 'react'
import { Link } from 'react-router-dom'

const ListView = ({ data, handleClick }) => {
  return (
    <div className="main">
      {data.map((ele) => {
        const { id, title, img, genre, authour } = ele
        return (
          <Link key={id} to="/detail">
            <section
              className="single-element"
              onClick={() => {
                handleClick(ele)
              }}
            >
              <img src={img} alt="" />
              <h4>{title}</h4>
              <p>{authour}</p>
              <p>{genre}</p>
            </section>
          </Link>
        )
      })}
    </div>
  )
}

export default ListView
