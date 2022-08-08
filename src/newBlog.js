import { useState } from "react";

const Create = () => {


    const [title, setTitle]= useState('');
    const [blogBody, setBlogBody]= useState('');
    const [author, setAuthor]= useState('');


    return ( 
<>

<div className="create">
    <h2>Create a new blog here!</h2>

    <form>
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