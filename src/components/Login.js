import { signInWithPopup } from "@firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { changeUser } from "../redux/reducer";

function Login() {
       const dispatch = useDispatch()
       const handlelogin = ()=>{
        signInWithPopup(auth,provider)
        .then((result) =>{
           dispatch (changeUser(result._tokenresponse))
        })
        .catch((error) => console.log(error.message))
        
       }
  return (
    <div className="text-center">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="facebook-logo"
          width={400}
          height={400}
          className={"pr-2"}
        />
      </div>
      <div>
        <button className="btn btn-primary mt-5" onClick={handlelogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
