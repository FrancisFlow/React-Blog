import { useState } from "react";


const Home = () => {

    const [power, setPower] = useState('Consistency');

   

    const handleClick = (e, name) => {
        if  (name != undefined) {

            name=name.toLowerCase();
        }
        else if (name == undefined || name==null)  {
            name= " by default"
        }
        console.log('I have been clicked' + name, e);


        }

    return ( 

        <>
        
        <h2>Homepage by me</h2>

        <h2> My power is {power}</h2>

        <h2> Together with this, my power breeds {power}</h2>

        <button onClick={()=>{
            setPower('Mastery')
        }} ></button>

        <h2> This too is my power</h2>
        
        
        <button onClick={handleClick}>
            Do what?</button>

        <button> By who? </button>

        </>


     );
}
 
export default Home;