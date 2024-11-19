import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Info from "../components/Info";
import "../styles/GuestLayout.css"
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function GuestLayout() {

    const [showComponents, setShowComponents] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY || 0);

    useEffect(()=>{
        const handleScroll= ()=> {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY >50) {
                setShowComponents(false);
            } else {
                setShowComponents(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    },[lastScrollY]);

    return (
        <>
            <Header className={showComponents ? "visible": "hidden"} />
            <Info/>
            <Outlet />
            <Contact/>
            <Footer/>
        </>
    );
}