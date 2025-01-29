import React from "react";
import './Sidebar.css'


const SidePanel =()=>{
    return(
        <div className="sidePanel">
            <h5>Quick Links</h5>
            <ul>
            <li><a href="">Control Panel</a></li>
            <li><a href="">Appointment Calender</a></li>
            <li><a href="">Filter Selection</a></li>
            <li><a href="">Patient Record Management</a></li>
            <li><a href=""> Lab Management</a></li>
            <li><a href="">Recommendation Panel</a></li>
            <li><a href="">Add Patient</a></li>
            <li><a href="">Add New Appointment</a></li>
            <li><a href="">Patient Bills Listing</a></li> <hr />

            <div className="loginStatus">
                <h5>Login Status</h5>
                <p><strong>Login As: </strong>Canathy Patrick Kofi</p>
                <p><strong>User Type: </strong> Admin</p>
                <p><strong>Clinic Name: </strong>Canat Medical Center</p>
                <a href="">Logout</a>
            </div>
            </ul>
        </div>
        
    )
}

export default SidePanel