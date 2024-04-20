import React from "react";
import { SideBarData } from "./SideBarData";
import Button from '@mui/material/Button';
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';



const SideBar = () => {
    const [subNav, setsubNav] = useState(-1)
    const [open, setOpen] = useState(true)
    
    return (
        <div className="flex">
            <div className={`${open ? "w-72" : "w-16"} h-screen bg-blue text-grey pt-16`}   >
                <ul className="">
                    <li className="cursor-pointer text-center"> <MenuIcon onClick= { () => setOpen(!open)}/> </li>
                    <br />
                {SideBarData.map((val,key) =>{
            return (
                <li 
                    className="flex border-1 ml-10 m-8"
                >
                    {" "}
                    <div className={`${!open && "scale-0"} pr-4`}>{val.icon}</div>{" "}

                    <div className={`text-2xl cursor-pointer ${!open && "scale-0"}`}>
                        {val.title}
                    </div> 
                    <div>
                        
                    </div>
                    <div className= {`${!open && "scale-0"} text-2xl left-56 absolute`}>
                        <KeyboardArrowDownIcon className="cursor-pointer" onClick = { () => setsubNav(key)}  />
                    </div>

                    <div className="text-grey pt-10">
            {subNav === key && val.subTitle.map((val, subIndex) =>{
               return(
                <div className={`${!open && "scale-0"} text-xl cursor-pointer text-left mt-4 inline-flex`} key={key} onClick={()=> {window.location.pathname = val.link}}> 
                {val.title}
                 </div>
               )
             })
             } 
                    </div>
                </li>
            )
        })}
         </ul>

        </div>

        <div>
            <Button />
        </div>
        </div>
        
    )
}

export default SideBar;