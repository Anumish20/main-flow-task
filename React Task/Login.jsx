import React from 'react'
import { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";





   export default function  Login() {

    const navigate = useNavigate();

    
     let [formData , setFormData ] = useState({
         email:"",
         Password: "",
     });

     let handleInputChange = (event) => {
    

        setFormData( (currData) => {
              return{...currData, [event.target.name]:event.target.value}; 
        })
             };

         let handleSubmit = (event) => {
            event.preventDefault()
           axios.post("http://localhost:3001/login");
           navigate('/main');

            //  .then(result => 
            //   {
            //      console.log(result)
            //   if(result.data === "Success"){
                 
                    
    //  .catch(err => console.log(err));


             console.log(formData);
             setFormData ({  
                email:"",
                 Password: "",
             });
      };

     return(
        <>
        <h3>Login to Continue</h3> 
        <br />
        <form onSubmit = {handleSubmit}>

        <label htmlFor="emailAddress"> Email Address:</label>
            <input 
            placeholder= "@gmail.com" 
            type="email" 
            id ="emailaddress"
             value ={FormData.email}
             onChange ={handleInputChange} 
             name =  "email" />
             <br />
            <br />


            <label htmlFor="pass">Password:</label>
            <input
             placeholder = "******"
             type="password" id ="pass"
              value ={FormData.Password}
             onChange ={handleInputChange}
             name="Password"/>
             <br /> <br />

             <button type ="submit">Login</button> <br /> <br/>
             
             </form>
             </>
     )
    }

        
    
