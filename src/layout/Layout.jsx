import React, { useEffect } from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Layout = () => {
    let nav = useNavigate()
    useEffect(()=>{
        let local = localStorage.getItem("login")
        if(localStorage.getItem("login") !== "true"){
             nav("/")
        }
    },[])
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;