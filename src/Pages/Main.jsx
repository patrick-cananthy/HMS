import React from "react";
import './Main.css'
import SidePanel from "../Component/Sidebar";
import Header from "../Component/Header";
import NursesDashboard from "../Component/NursesComponent/NursesDashboard";

const MainPage =()=>{
    return(
        <div>
            <Header/>
           <SidePanel/>
         <NursesDashboard/>
        </div>
    )
}

export default MainPage