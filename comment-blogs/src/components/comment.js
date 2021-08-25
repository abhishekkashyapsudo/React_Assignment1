
function Comment(props) {
    let comment = props.comment;
    if (comment.isActive){
      return (
          <div className="comment" style={{paddingLeft:"10%"}}>
            Id ({props.comment.id}) {props.comment.comment}
            
          </div>
      )
    }
    else{
        return (
            <div className="comment" style={{paddingLeft:"10%"}}>
            </div>
        )
      
    }
  }
export default Comment;