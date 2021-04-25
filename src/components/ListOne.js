import React from 'react'
import PropTypes from 'prop-types'

const ListOne = ({ img, title, authour, genre, discription, handleClick }) => {
  return (
    <section
      onClick={() => {
        handleClick({ img, title, authour, genre, discription })
      }}
      className="single-element"
    >
      <img src={img} alt="" />
      <h4>{title}</h4>
      <p>{authour}</p>
      <p>{genre}</p>
    </section>
  )
}
ListOne.prototype = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authour: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
}

export default ListOne
