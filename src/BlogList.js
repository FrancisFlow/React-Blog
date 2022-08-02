import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    return ( 
        
        <>
        
        <div className="blogs-list">

            <h2> {title} </h2>


        {
                blogs.map((blog)=> (

                <div className="blog-preview"  key={blog.id}>

                <Link to={'blog/' + blog.id}>
                
                <h2>{blog.title}</h2>

                <h3>Written by {blog.author}</h3>
                </Link>
                </div>

                ))}
        </div>
        
        </>


    );
}
 
export default BlogList;