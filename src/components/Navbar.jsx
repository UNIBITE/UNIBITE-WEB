import React from 'react'
import icone from "../assets/icone.jpeg"
import "../App.css"
import { Link, useLocation } from 'react-router-dom'
export default function Navbar() {
    const location=useLocation()
    return (
        <nav className='flex justify-between bg-[#031628]'>

            <div className='navleft flex items-center gap-1.5' style={{ marginLeft: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={icone} alt="" style={{ height: "100px", borderRadius: "50%" }} />
                </div>
                {/* <div>
                    <p style={{ color: "#c79629", textAlign: "center", fontSize:"29px",fontWeight:"bolder" }}>MEALVERSITY</p>
                </div> */}
            </div>
            <ul className='navlink flex gap-8 text-[#c79629] items-center text-2xl font-bold' style={{ marginBottom: "10px", marginRight: "30px", fontFamily: "Lato" }}>

              <Link to="/">  <li  className={`${location.pathname==="/"?"active":""} cursor-pointer clashover`} style={{padding: "7px"}}>
                   Home
                </li></Link>


                <Link to="/about"><li className={`${location.pathname==="/about"?"active":""} cursor-pointer clashover`} style={{padding: "7px"}}>
                    About
                </li></Link>

               <Link to="/contact"><li className={`${location.pathname==="/contact"?"active":""} cursor-pointer clashover`}style={{padding: "7px"}} >
                    Contact Us
                </li></Link> 
            </ul>
        </nav>
    )
}
