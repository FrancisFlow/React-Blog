const BlogList = ({blogs, title, handleDelete}) => {
    return ( 
        
        <>
        
        <div className="blogs-list">

            <h2> {title} </h2>


        {
                blogs.map((blog)=> (

                <div className="blog-preview"  key={blog.id}>
                
                <h2>{blog.title}</h2>

                <h3>Written by {blog.author}</h3>

                <button onClick={()=> handleDelete(blog.id)}>Delete</button>
                </div>

                ))}
        </div>
        
        </>


    );
}
 
export default BlogList;