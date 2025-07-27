import React from 'react'
import icone from "../assets/icone.jpeg"
export default function Navbar() {
    return (
        <nav className='flex justify-between bg-[#031628]'>

            <div className='navleft flex items-center gap-1.5' style={{marginLeft:"20px"}}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={icone} alt="" style={{ height: "120px", borderRadius: "50%" }} />
                </div>
                {/* <div>
                    <p style={{ color: "#c79629", textAlign: "center", fontSize:"29px",fontWeight:"bolder" }}>MEALVERSITY</p>
                </div> */}
            </div>
            <div className='navlink flex gap-8 text-[#c79629] items-center text-2xl font-bold' style={{marginBottom:"10px",marginRight:"30px",fontFamily:"Lato"}}>
                <div className='active cursor-pointer'>
                    Home
                </div>
                <div className='cursor-pointer' >
                    About
                </div>
                <div className='cursor-pointer'>
                    Contact Us
                </div>
            </div>
        </nav>
    )
}
