import { useState } from "react";


const Home = () => {

    const [blogs, setBlogs]= useState([
        {
            title: 'The best blogs in the world', id:1, body:'This is the way that the lord has made, we will rejoice and be glad in it'
        },

        {title: 'The second best blog in the world', id:2, body:'This is the second best blog in the world'},

    {title: 'The third best blog in the world', id:3, body:'This is the third best blog in the world'},
    ]
    );

    return ( 

        <>
        <div className="blogs">

            {
                blogs.map((blog)=> (

                <div className="things"  key={blog.id}> 
                
                <h2>{blog.title}</h2>

                <h3>{blog.body}</h3>
                </div>

                ))
            }
        </div>
    

        </>


     );
}
 
export default Home;