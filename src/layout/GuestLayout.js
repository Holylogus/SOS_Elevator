import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Info from "../components/Info";

export default function GuestLayout() {
    return (
        <>
            <Header />
            <Info/>
            <Outlet />
        </>
    );
}