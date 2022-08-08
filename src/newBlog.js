import { useState } from "react";

const Create = () => {


    const [title, setTitle]= useState('');
    const [blogBody, setBlogBody]= useState('');
    const [author, setAuthor]= useState('');
    const handleSubmit= (e) => {
        e.preventDefault();
        const blog={title, blogBody, author}
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("New blog created successfully")
        })
    }

    return ( 
<>

<div className="create">
    <h2>Create a new blog here!</h2>

    <form onSubmit={handleSubmit} >
                    <label>
                        Blog Title:
                    </label>
                    <input type="text" 
                           name="title"
                           value={title}
                           onChange={(e)=>{setTitle(e.target.value)}}

                            />

                    <label>Blog Body</label>

                    <textarea type="text"
                              value={blogBody}
                              onChange={(e)=>{setBlogBody(e.target. value)}}
                              />

                    <label>Author</label>
                    <input type="text"
                           value={author}
                           onChange={(e)=>{setAuthor(e.target.value)}}
                           
                           />

                           <button>Add blog</button>

                </form>
</div>


</>

     );
}
 
export default Create;