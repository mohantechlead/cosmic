import React, {useState} from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import api from "../api"
import { useNavigate } from "react-router-dom";


function Login () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/users/token/", { username, password })
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/sidebar")           
        } catch (error) {
            alert(error)
        } 
    };

    return (
        <div className="bg-blue h-screen flex justify-center items-center">
             <form className="text-grey" onSubmit={handleSubmit}>
             
        <div className="bg-grey px-8 py-2 rounded-2xl w-96 h-96 items-center">
        <div className="text-center mt-30">
             <div className="text-3xl text-blue font-semibold pt-2">Login</div>
         </div>

    <div className="text-gray-500 text-sm text-center pt-8 italic">
          <p>
              You will be redirected to home <br /> page 
          </p>     
      </div>
      <div className=" flex flex-col gap-4 items-center pt-16 ">
        <input
            className="w-60 h-10 px-2 rounded"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            className="w-60 h-10 px-2 rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit text-grey bg-blue font-bold  rounded h-10  w-60" >
           Login
        </button>    

        </div>
        </div>
    </form>
        </div>
       
    );
}

export default Login