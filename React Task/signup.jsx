import { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

   export default function  Signup() {

    const navigate = useNavigate()
    
    let [formData , setFormData ] = useState({
        fullName: "",
        lastName:"",
        email:"",
        Password: "",
        phone:"",

    });

    let handleInputChange = (event) => {
    

         setFormData( (currData) => {
              return{...currData, [event.target.name]:event.target.value};
             });
            };

        let handleSubmit = (event) => {
           event.preventDefault();
           axios.post("http://localhost:3001/register");
           navigate('/login');
            console.log(formData);
            setFormData ({  
                fullName: "",
                lastName:"",
                email:"",
                Password: "",
                phone:"",
            });
     };
   
    
    return(
        <>
        <h3>Signup to continue </h3>
        <br />
        
        <form onSubmit = {handleSubmit}>

            <label htmlFor="fullname"> First Name:</label>
            <input 
            type="text" 
            id ="fullname"
              value ={FormData.fullName}
             onChange ={handleInputChange}
            name="fullName"/>
            <br />
            <br />

            <label htmlFor="lastname"> Last Name:</label>
            <input 
            type="text" 
            id ="lastname"
            value ={FormData.lastName}
             onChange ={handleInputChange}
             name="lastName"/>
            <br />
            <br />

            <label htmlFor="emailAddress"> Email Address:</label>
            <input 
            placeholder= "@gmail.com" 
            type="email" 
            id ="emailaddress"
             value ={FormData.email}
            onChange ={handleInputChange}
             name="email" />
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

            <label htmlFor="rewrite"> Phone No:</label>
            <input 
            placeholder= "+ 91" 
            type="text" 
            id ="rewrite"
            value ={FormData.phone}
            onChange={handleInputChange}
            name="phone"/>
            <br />
            <br />

            <button type ="submit">Register</button> <br /> <br/>
        
             
             <p>Already have a Account</p>
          <button className = "btn"> < a href ="/login"> Login</a > </button>
        </form>
        </>
    );
}
