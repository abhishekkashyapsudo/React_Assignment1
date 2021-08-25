import React, {Component} from "react";
import blgs from "../data/blogs.json"
import Comment from './comment';
import cmts from "../data/comments.json"


class Blogs extends React.Component {
    constructor(){
        super();
        this.state = { comments: cmts,  blogs: blgs};
    }
    render() {
      return (
        <div className="blogs" style={{paddingLeft:"10%"}}>
            { this.state.blogs.map((blog) => {
                return (
                <div key={"blog" + blog.id}>
                    Blog Id : {blog.id}<br/>
                    Title : {blog.title}<br/>
                    Description : {blog.description}<br/> 
                    <br/>
                    
                    <b>Comments: </b>
                    {this.state.comments.filter(comment => comment.blogId == blog.id).length == 0 && "No comments found"}
                    {this.state.comments.map((comment) => {
                    return (
                    <span key ={"comment" + comment.id}>
                        {comment.blogId === blog.id && <Comment comment={comment}></Comment>}
                        </span>);
                })} 
                <hr/>
                </div>);
                
            })}

        </div>
    );
    }
  }

export default Blogs;