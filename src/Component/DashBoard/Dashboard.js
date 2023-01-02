import React from "react";
import Login from "../../Auth/Login";
import Header from "../Pages/Navbar";


function Dashboard(){
    return(
        <>
            <div className="dashboard">
                <Header />
                <Login />
            </div>
        </>
    )
}

export default Dashboard;