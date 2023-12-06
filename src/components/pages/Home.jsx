
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    let nav = useNavigate()
    useEffect(()=>{
        let local = localStorage.getItem("")
        if(localStorage.getItem("login") !== "true"){
             nav("/")
        }
    },[])
   
    return (
        <div>
            <h2></h2>
        </div>
    );
};

export default Home;