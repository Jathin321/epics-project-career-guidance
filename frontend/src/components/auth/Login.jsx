import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
export default function Login({ setAuthState }) {

    const [Credentials, setCredentials] = useState({email:"",password:""})
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({email : Credentials.email, password : Credentials.password}))
        try {
          const response = await fetch("http://localhost:9999/api/login", {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: Credentials.email,
              password: Credentials.password
            })
          });
          // if (!response.ok) {
          //   throw new Error(`HTTP error! Status: ${response.status}`);
          // }
          const json = await response.json();
          console.log(json);
          if (!json.success) {
            alert("Enter valid credentials");
          }
          else{
            localStorage.setItem("authToken",json.authToken);
            localStorage.setItem("userEmail",Credentials.email);
            console.log(Credentials.email)
            console.log(localStorage.getItem("authToken"));
            navigate("/fields");
          }
        } catch (error) {
          console.error("SYJ Error:", error);
        }
      }

      const onChange = (e) => {
        setCredentials({...Credentials,[e.target.name]:e.target.value})
        // console.log(e.target.value)
      }

    return (
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
                <form>
                    <h1 className="mb-8 text-4xl font-semibold text-center">Log in</h1>

                    <div className='flex flex-col space-y-4 my-16'>
                        <input
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" 
                            onChange={onChange} />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            onChange={onChange}  />
                        <a
                            type="submit"
                            className=" relative top-6 w-full text-center py-3 rounded bg-blue-900 text-white hover:bg-blue-600 focus:outline-none my-6"
                            onClick={handleSubmit}>
                                Login
                        </a>

                    </div>


                </form>

                <div className="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the Terms of Service and Privacy Policy
                </div>
            </div>

            <div className="text-gray-300 mt-6">
                Don't have an account?
                <button
                    className="no-underline border-b border-blue text-blue font-semibold cursor-pointer"
                    onClick={() => setAuthState('signup')}>Sign up</button>.
            </div>
        </div>
    )
}
