import React, { useState, useEffect } from 'react';

function Comment(props) {
    const [comments, setComments] = useState([]);
    let id = props.id;
    useEffect(() => {
      
      fetch('http://localhost:5000/api/v1/comments/'+id)
            .then(response => response.json())
            .then(data => setComments(data));
    },[id]);

    return (<div>
    <b>Comments: </b>
    {comments.length === 0 && "No comments found"}
    {comments.map((comment) => {
      return (
        <span key ={"commenti" + comment.id}>
        {comment.isActive?
          
            <div className="comment" style={{paddingLeft:"10%"}}>
              Id ({comment.id}) {comment.comment}
              
            </div>
      :   
              <div className="comment" style={{paddingLeft:"10%"}}>
              </div>
      }
        </span>);
    })}
    </div>
  )
  
  
}
export default Comment;