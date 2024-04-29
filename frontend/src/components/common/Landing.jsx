import React from "react";
import Design from "./Design";
import { useNavigate } from "react-router-dom";


function Landing() {
    const navigate = useNavigate()
    return (
        <div className="bg-cosmic-pattern h-screen w-screen">
            <div className="text-right lg:text-2xl pt-8 pr-10 md:text-2xl text-grey" >
                <button onClick={()=>navigate('/login')}>Login</button>
            </div>
            <div className="mt-64">
            <div className="font-semibold lg:text-6xl md:text-lg ml-24 text-grey">
                    Cosmic Connection

            {/* <Design />  */}
               </div> 

               <div className="lg:text-3xl sm:text-sm ml-24 mt-6 text-grey">
                    <p>Elevate Your Performance: Navigate Track 
                        <br /> and Conquer with Precision!
                    </p>
                </div> 
            </div>
           

        </div>
               
              
              
           
          
        
    );
}

export default Landing