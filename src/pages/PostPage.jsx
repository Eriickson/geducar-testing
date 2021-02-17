import React, { useEffect, useState } from 'react'
import axios from 'axios'


const PostPage = ({ match }) => {
  const [commentsList, setCommentsList] = useState([])

  async function getComments(postId) {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      console.log(data);
      setCommentsList(data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getComments(match.params.postId)
  }, [match])


  if (!commentsList.length) {
    return <p>Cargando...</p>
  }

  return (
    <div>
      <h2 className="mb-4">Lista de Comentarios</h2>
      <div className="list-group">
        {commentsList.map((comment) => (
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between mb-2">
              <h3 className="mb-1 h5">{comment.name}</h3>
              <a href={`mailto:${comment.email}`} style={{ color: "#000", fontSize: 14 }}>{comment.email}</a>
            </div>
            <p className="mb-1">{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostPage
