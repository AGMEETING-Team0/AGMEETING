import { Link } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router";
import DashboardLayout from "./Component/DashBoard/Layout";

function Land() {

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>
                LANDING PAGE!!!
            </h1>
            <Link to="/dashboard">
                dashboard
            </Link>
        </>
    );
};

export default Land;