import React from 'react'
import { Link } from 'react-router-dom'

const DetailView = ({ detail, setNavText }) => {
  const { title, authour, img, genre, discription } = detail
  const defaultst = {
    title: 'Random',
    authour: 'Random',
    img:
      'https://manybooks.net/sites/default/files/styles/220x330sc/public/2021-04/51M7VoSmeAL.jpeg?itok=3Z1GMOYP',
    genre: 'RANDOM',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum pulvinar etiam non quam lacus. In ante metus dictum at tempor. Elementum nibh tellus molestie nunc non blandit. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.',
  }
  return (
    <>
      <div className="detail-view">
        <img src={img || defaultst.img} alt="" />
        <div className="info">
          <h3>Title: {title || defaultst.title}</h3>
          <h4>Authour: {authour || defaultst.authour}</h4>
          Genre:
          <p className="genre">{genre || defaultst.genre}</p>
          <br />
          Discription:
          <p className="desc">{discription || defaultst.discription}</p>
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

DetailView.defaultProps = {
  detail: {
    title: 'Random',
    authour: 'Random',
    img:
      'https://manybooks.net/sites/default/files/styles/220x330sc/public/2021-04/51M7VoSmeAL.jpeg?itok=3Z1GMOYP',
    genre: 'RANDOM',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum pulvinar etiam non quam lacus. In ante metus dictum at tempor. Elementum nibh tellus molestie nunc non blandit. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.',
  },
}

export default DetailView
