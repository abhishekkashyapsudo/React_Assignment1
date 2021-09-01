import React from "react";
import "./Form.css";

class AddBlog extends React.Component {
    
    constructor(props) {
      super(props);
      
      
      this.state = {
        id: "",
        title: "",
        description: "",
        errors:{}
      }
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(evt) {
        const value = evt.target.value;
        this.setState({
          ...this.state,
          [evt.target.name]: value
        });
    }
    handleValidation(){
        let errs = {};
        let formIsValid = true;

        //Name
        if(!this.state.id){
           formIsValid = false;
           errs["id"] = "Id cannot be empty";
        }
        if(!this.state.title){
            formIsValid = false;
            errs["title"] = "Title cannot be empty";
        }
        else if(this.state.title.length < 3){
            formIsValid = false;
            errs["title"] = "Title must have minimum length of 3.";
        }
        if(!this.state.description){
            formIsValid = false;
            errs["description"] = "Description cannot be empty";
        }
        else if(this.state.description.length < 5){
            formIsValid = false;
            errs["description"] = "Description must have minimum length of 5.";
        }
        this.setState({
            errors: errs});

        return formIsValid;
    }
  
    handleSubmit(event) {
      console.log(this.state);
      if(this.handleValidation()){
        let blog = {"id":this.state.id,
        "title":this.state.title,
        "description":this.state.description};
        this.addBlog(blog);
     }else{
        alert("Form has errors.")
     }
      event.preventDefault();
    }

    addBlog(blog){

        let blogs = JSON.parse(localStorage.getItem("blogs") || []);
        let updated = false;
        for(var i =0;i<blogs.length;i++){
            if (blogs[i].id === blog.id){
                blogs[i].title = blog.title;
                blogs[i].description = blog.description;
                updated = true;
                break;
            }
        }
        if (!updated){
            blogs.unshift(blog);
            alert("Blog with id "+blog.id+" added successfully");
        }
        else{
            alert("Blog with id "+blog.id+" updated successfully");
        }
        localStorage.setItem("blogs", JSON.stringify(blogs));
        this.props.history.push('/');
    }
  
    render() {
      return (
          
        <form className = "form-box" onSubmit={this.handleSubmit}  style={{
            backgroundColor: '#E0FFFF',
            
          }}>
            <h2  style={{color: "red", textAlign:"center"}}>Add New Blog</h2>
            <hr/>
            <input
             type="text" placeholder="Blog ID" value={this.state.id} name ="id"onChange={this.handleInputChange} />
             <span style={{color: "red"}}>{this.state.errors["id"]}</span>
            <input type="text" placeholder="Title" value={this.state.title} name ="title" onChange={this.handleInputChange} />
            <span style={{color: "red"}}>{this.state.errors["title"]}</span>
            <textarea type="text" placeholder="Description" value={this.state.description} name ="description" onChange={this.handleInputChange} />
            <span style={{color: "red"}}>{this.state.errors["description"]}</span>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default AddBlog;