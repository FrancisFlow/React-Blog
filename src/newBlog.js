import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {


    const [title, setTitle]= useState('');
    const [blogBody, setBlogBody]= useState('');
    const [author, setAuthor]= useState('');
    const [isPending, setIsPending]= useState(false);
    const history=useHistory()


    const handleSubmit= (e) => {
        e.preventDefault();
        const blog={title, blogBody, author}
        setIsPending(true);
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("New blog created successfully")
            setIsPending(false);
            history.push('/')
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

                          {!isPending && <button>Add blog</button>}
                          {isPending && <button disabled>Adding</button>}

                </form>
</div>


</>

     );
}
 
export default Create;