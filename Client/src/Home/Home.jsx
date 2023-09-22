import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <Link to = "/profile">
      <h3>profile</h3>
      </Link>
    </div>
  )
}

export default Home
