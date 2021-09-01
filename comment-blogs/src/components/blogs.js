import React from "react";
import Comment from './comment';


class Blogs extends React.Component {
    constructor(){
        super();
        this.state = { blogs: [], comments:[]};
    }
    componentDidMount() {
        // Simple GET request using fetch
        fetch('http://localhost:5000/api/v1/blogs')
            .then(response => response.json())
            .then(data => this.setState({ blogs: ((localStorage.getItem('blogs')!=null?JSON.parse(localStorage.getItem('blogs')):[] ).concat(data ))}));
        fetch('http://localhost:5000/api/v1/comments')
            .then(response => response.json())
            .then(data => this.setState({ comments: data}));
    }
    render() {
      return (
          
        <div className="blogs" style={{paddingLeft:"10%"}}>
            <h2  style={{color: "red", textAlign:"center"}}>Blogs</h2>
            <hr/>
            { this.state.blogs.map((blog) => {
                return (
                <div key={"blog" + blog.id}>
                    Blog Id : {blog.id}<br/>
                    Title : {blog.title}<br/>
                    Description : {blog.description}<br/> 
                    <br/>                    
                    <span key ={"comment" + blog.id}>
                        <Comment id={blog.id}></Comment>
                    </span>
                
                <hr/>
                </div>
            );
                
            })}

        </div>
    );
    }
  }

export default Blogs;