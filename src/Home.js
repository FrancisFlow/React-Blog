import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs]= useState(null);
    const [isPending, setIsPending]= useState(true);
    const [error, setError]= useState(null);


    useEffect(() => {   


        setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            if(!res.ok)
            {throw Error("Couldn't resolve api call to porvided url") }

            return res.json();
            
        })


        .then(data=>{
            setBlogs(data)
            setIsPending(false);
            setError(null)
        })
        .catch(err => { 
            console.log(err.message);
            setIsPending(false);
            setError(err.message)

        })
    }, 1000);

    }, []);

    return ( 

        <>
        <div className="home">'

        {error && <div> { error } </div>}
        
        {isPending && <div> <h2>Loading ......</h2></div>}

            { blogs &&

        <BlogList  blogs={blogs}  title="All the blogs in the world"/>
            }


        </div>
    

        </>


     );
}
 
export default Home;