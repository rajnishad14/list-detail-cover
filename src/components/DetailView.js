import React from 'react'
import { Link } from 'react-router-dom'

const DetailView = ({ detail, setNavText }) => {
  const { title, authour, img, genre, discription } = detail
  return (
    <>
      <div className="detail-view">
        <img src={img} alt="" />
        <div className="info">
          <h3>Title: {title}</h3>
          <h4>Authour: {authour}</h4>
          Genre:
          <p className="genre">{genre}</p>
          <br />
          Discription:
          <p className="desc">{discription}</p>
        </div>
      </div>
      <Link to="/">
        <button
          className="detail-btn"
          onClick={() => {
            setNavText('This is List view')
          }}
        >
          Home
        </button>
      </Link>
    </>
  )
}

export default DetailView
