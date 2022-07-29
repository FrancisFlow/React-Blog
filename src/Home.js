import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs]= useState([
        {
            title: 'The best blogs in the world', id:1, body:'This is the way that the lord has made, we will rejoice and be glad in it', author: 'Goliath'
        },

        {title: 'The second best blog in the world', id:2, body:'This is the second best blog in the world', author: 'David'},

    {title: 'The third best blog in the world', id:3, body:'This is the third best blog in the world', author:'Kennedy'},
    ]
    );

    return ( 

        <>
        <div className="home">

        <BlogList  blogs={blogs}  title="All the blogs in the world"/>

        <BlogList blogs={blogs.filter((blogs) =>blogs.author === "David")} title="Blogs by David" />

        </div>
    

        </>


     );
}
 
export default Home;