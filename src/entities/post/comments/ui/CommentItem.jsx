import React, { useState } from 'react'
import { useDeleteCommentMutation } from '../api/commentApi'
import { useSelector } from 'react-redux'

export function CommentItem({ comment }) {
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteComment] = useDeleteCommentMutation()
  const user = useSelector((state)=>state.auth.user)

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await deleteComment(comment.id).unwrap()
    } catch (e) {
      console.log(e)

      // handle error if needed
    }
  }

  return (
    <div
      style={{
        borderBottom: '1px solid #ddd',
        padding: '5px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span>
        <b>{comment.authorName}</b>: {comment.text}
        {isDeleting && (
          <span style={{ marginLeft: 8, color: '#888' }}>Видаляється...</span>
        )}
      </span>
     { user && <button
        onClick={handleDelete}
        disabled={isDeleting}
        style={{ marginLeft: 10 }}
      >
        Видалити
      </button>}
    </div>
  )
}
// ...existing code...
