import React from "react";
import './NursesDashboard.css'


const NursesDashboard=()=>{
    return(
        <div className="Dashboard">
          
            <table>
                <tr>
                    <td><button><img src="HM Images/appointmentCalender.png" alt="" />Appointment Calender</button></td>
                    <td><button><img src="HM Images/appointmentCalender.png" alt="" />Appointment Calender</button></td>
                
                </tr>
                <tr>
                    <td><button><img src="HM Images/appointmentCalender.png" alt="" />Appointment Calender</button></td>
                    <td><button><img src="HM Images/appointmentCalender.png" alt="" />Appointment Calender</button></td>
                
                </tr>
                <tr>
                    <td><button><img src="HM Images/appointmentCalender.png" alt="" />Appointment Calender</button></td>
                    <td><button><img src="HM Images/appointmentCalender.png" alt="" />Appointment Calender</button></td>
                
                </tr>
                <tr>
                    <td><button><img src="HM Images/appointmentCalender.png" alt="" />Appointment Calender</button></td>
                    <td><button><img src="HM Images/appointmentCalender.png" alt="" />Appointment Calender</button></td>

                
                </tr>
                <tr>
                    <td><button><img src="HM Images/appointmentCalender.png" alt="" />Appointment Calender</button></td>
                    <td><button><img src="HM Images/appointmentCalender.png" alt="" />Appointment Calender</button></td>
                
                </tr>
                  <tr>
                    <td><button><img src="HM Images/appointmentCalender.png" alt="" />Appointment Calender</button></td>
                    <td><button><img src="HM Images/appointmentCalender.png" alt="" />Appointment Calender</button></td>
                
                </tr>
            </table>

            <form action="">
                <h4>Search Patient</h4>
                <label htmlFor="">Patient Name </label>
                <input type="text"  />
                <label htmlFor="">Patient No.</label>
                <input type="text" />
                <label htmlFor="">Patient Phone</label>
                <input type="text" />
                

            </form>
        </div>
    )
}

export default NursesDashboard