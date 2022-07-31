import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [name, setName]= useState('Sandra')

    const [blogs, setBlogs]= useState(null);

    const handleDelete= (id) => {
        const newBlogs= blogs.filter(blog=> blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {   
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data=>{
            setBlogs(data)
        });
    }, []);

    return ( 

        <>
        <div className="home">

            { blogs &&

        <BlogList  blogs={blogs}  title="All the blogs in the world" handleDelete={handleDelete}/>
            }


        <button onClick={()=> {setName('Rose')}} > I love {name}</button>

        </div>
    

        </>


     );
}
 
export default Home;