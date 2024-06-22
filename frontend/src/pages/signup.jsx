import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


export default function Signup() {

    const [Credentials, setCredentials] = useState({surname:"",name:"",phone:"",email:"",password:"",country:"",state:""})
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({surname : Credentials.surname, email : Credentials.email, password : Credentials.password, state : Credentials.state}))
        try {
          const response = await fetch("http://localhost:9999/api/createuser", {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              surname: Credentials.surname,
              name:Credentials.name,
              phone:Credentials.phone,
              email: Credentials.email,
              password: Credentials.password,
              country: Credentials.country,
              state: Credentials.state
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
            navigate("/login");
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
    <div className="bg-gradient-to-b from-blue-900 to-blue-500 min-h-screen grid grid-cols-2">
      <div>
        <img
          className="object-center p-10"
          src="https://i.pinimg.com/originals/14/bb/c9/14bbc99c3907c39d21ec10163ec14e92.png"
          alt="svg"
        />
      </div>

      {/* {authState === 'login' && (
        <Login setAuthState={setAuthState} />
      )}
      {authState === 'signup' && <SignUp setAuthState={setAuthState} />} */}

<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
                <form>
                    <h1 className="mb-8 text-4xl font-semibold text-center">Sign up</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="surname"
                        onChange={onChange}
                        placeholder="Surname" />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        onChange={onChange}
                        placeholder="Name" />

                    <input
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        onChange={onChange}
                        placeholder="Email" />

                    <input
                        type="number"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="phone"
                        onChange={onChange}
                        placeholder="Phone Number" />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="country"
                        onChange={onChange}
                        placeholder="Country" />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="state"
                        onChange={onChange}
                        placeholder="State" />

                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        onChange={onChange}
                        placeholder="Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-blue-900 text-white hover:bg-blue-600 focus:outline-none my-1"
                        onClick={handleSubmit}>Create Account
                    </button>
                </form>

                <div className="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the Terms of Service and Privacy Policy
                </div>
            </div>

            <div className="text-gray-300 mt-6">
                Already have an account?
                <button className="no-underline border-b border-blue text-blue font-semibold cursor-pointer">
                    <Link to="/login"> Log in </Link>
                </button>.
            </div>
        </div>
    </div>
  )
}