import React from 'react'
import { UserContext } from './UserProvider'
import { useContext } from 'react'

const Home = () => {
  const {user} =useContext(UserContext);

  return (
    <div>
      {user?<h1>Hii this is your Home page {user.name}</h1>:<h1>Please Login</h1>}

    </div>
  )
}

export default Home