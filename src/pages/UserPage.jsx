import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserPage = ({ match }) => {
  const [listPosts, setListPosts] = useState([])


  async function getPost(userId) {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      setListPosts(data);

    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getPost(match.params.userId)
  }, [match])


  if (!listPosts.length) {
    return <p>Cargando...</p>
  }

  return (
    <div>
      <h2 className="mb-4">Lista de Publicaciones</h2>
      <div className="row">
        {listPosts.map((post) => (
          <div key={post.id} className="col-md-4 col-lg-3 mb-4">
            <Link to={`/post/${post.id}`} style={{
              textDecoration: "none",
              color: "#000"
            }}>
              <div className="card">
                <h2 className="card-header h6">
                  {post.title}
                </h2>
                <div className="card-body ">
                  <p className="lead">{post.body}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserPage
