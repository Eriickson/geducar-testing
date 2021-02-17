import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {
  const [usersList, setUsersList] = useState([]);


  async function getUsers() {
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
      console.log(data);
      setUsersList(data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  if (!usersList.length) {
    return <p>Cargando...</p>
  }

  return (
    <div>
      <h2 className="mb-4">Lista de Usuario</h2>
      <div className="list-group">
        {usersList.map((user) => (
          <Link key={user.id} to={`/user/${user.id}`} className="list-group-item list-group-item-action" aria-current="true">
            <div className="d-flex w-100 justify-content-between mb-2">
              <h6 className="mb-1">{user.name}</h6>
            </div>
            <p className="mb-1">{user.username}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage
