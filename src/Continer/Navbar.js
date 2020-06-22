import React from 'react'
import {Link} from 'react-router-dom';
export const Navbar = () => {
    return (
        <div className=" ">
            <div class="sidebar bar ">
           <button className="button1"> Register Patients</button>
                   <div className="nab"> 
                   <Link  to ="/" >
                        <i class="fa fa-users" aria-hidden="true" style={{marginLeft:"15px"}}></i> <span style={{marginLeft:"10px",fontSize:"14px",fontWeight:"bold"}}>Patients</span>
                    </Link></div>     
                    <div className="nab"> <Link  to ="/Chart" >
                        <i class="fa fa-map-marker" aria-hidden="true" style={{marginLeft:"15px"}}></i>  <span style={{marginLeft:"18px",fontSize:"14px",fontWeight:"bold"}}>Map</span>
                    </Link>
                    </div>                 
                    <div className="nab"><a href="#contact">
                        <i class="fa fa-home" aria-hidden="true"  style={{marginLeft:"15px"}}></i>  <span style={{marginLeft:"10px",fontSize:"14px",fontWeight:"bold"}}>Department</span></a></div>
                    <div className="nab"> <a href="#about"> <i class="fa fa-user-md" aria-hidden="true" style={{marginLeft:"15px"}}></i>  <span style={{marginLeft:"14px",fontSize:"14px",fontWeight:"bold"}}>Doctors</span></a></div>
            </div>
        </div>
    )
}
