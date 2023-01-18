import React, { useState }  from "react";
import { auth, db } from "../config/Config";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Registration(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cpass, setCpass] = useState('');
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [cp_num, setCpnum] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const registerUser = (e) => {
    e.preventDefault();
    if (pass !== cpass){
        setError("passwords do not match!");
    }
    else{

    createUserWithEmailAndPassword(auth, email, pass, firstname, lastname, middlename, cp_num, address)
   .then((userCredential) => {
     // Signed in 
     const user = userCredential.user;

     console.log(user);
    setEmail('');
    setPass('');
    setCpass('');
    setFirstname('');
    setMiddlename(''); 
    setLastname('');
    setCpnum('');
    setAddress('');
    setError('');
    //  toast.success("Successfully Registered....");

     navigate("/produce");
     // ...
  })
   .catch(err => setError(err.message)); 

   db.collection('Users').doc().set({
    email: email,
    cpNum: cp_num,
    address: address,
    fName: firstname,
    lName: lastname,
    middle: middlename,
    password: pass
   });
    }
};

  

return(
    <div>
<section className="container mt-5" id="formSection">
{error && <span className="error-msg" style={{backgroundColor:'red'}}>{error}</span>}
    <form className="container border border-secondary rounded p-4" onSubmit={registerUser}>
        <div className="accordion accordion-flush" id="RegisterAccount">
  
            <div className="accordion-item">
                <h2 className="accordion-header" id="RegHeading">
                    <button className="accordion-button fw-bold" 
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#RegBody"
                            aria-expanded="true"
                            aria-controls="RegBody">
                            Log in details
                    </button>
                </h2>
                
                <div className="accordion-collapse"
                    id="RegBody"
                    aria-labelledby="#RegHeading"
                    data-bs-parent="#RegisterAccount">
                        <div className="accordion-body text-justify">
                            <div id="alertUser"></div>
                            <div className="input-group" >
                                <label className="input-group-text" htmlFor="form3Example1c">Email address:</label>
                                <input type="email" name="email" id="form3Example1c" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email} />
                            </div><br/>
                            <div className="input-group" >
                                <label  className="input-group-text" htmlFor="form3Example2c">Password:</label>
                                <input type="password" className="form-control"  name="pass"  id="form3Example2c" onChange={(e)=>setPass(e.target.value)} value={pass} />
                                <label  className="input-group-text" htmlFor="form3Example3c">Confirm Password:</label>
                                <input type="password" className="form-control" name="cpass" id="form3Example3c"  onChange={(e)=>setCpass(e.target.value)} value={cpass}/>
                            </div><br/>
                        </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="PersonalInfo">
                    <button className="accordion-button fw-bold collapsed" 
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#PersonalInfoBody"
                            aria-expanded="true"
                            aria-controls="PersonalInfoBody">
                            Personal Information
                    </button>
                </h2>
                
                <div className="accordion-collapse collapse"
                    id="PersonalInfoBody"
                    aria-labelledby="#PersonalInfo"
                    data-bs-parent="#RegisterAccount">
                        <div className="accordion-body text-justify">
                            <div className="input-group" >
                                <label className="input-group-text" htmlFor="Example4c">First Name:</label>
                                <input type="text" className="form-control" id="Example4c" name="firstname" onChange={(e)=>setFirstname(e.target.value)} value={firstname} />
                                <label className="input-group-text" htmlFor="form3Example5c" >Middle Initial:</label>
                                <input type="text" className="form-control" id="form3Example5c" name="middlename" onChange={(e)=>setMiddlename(e.target.value)} value={middlename} />
                                <label className="input-group-text" htmlFor="form3Example6c">Last Name:</label>
                                <input type="text" className="form-control" id="form3Example6c" name="lastname" onChange={(e)=>setLastname(e.target.value)} value={lastname} />
                            </div><br/>
                            <div className="input-group" >
                                {/* <label  className="input-group-text" htmlFor="form3Example7c">Date of Birth:</label>
                                <input type="date" className="form-control" id="form3Example7c"name="dob" value={dob} onChange={(e)=>setDob(e.target.value)}/> */}
                                <label className="input-group-text" htmlFor="form3Example8e1c">Cellphone number:</label>
                                <input type="tel" className="form-control" id="form3Example8e1c" name="cp_num" 
                                        onChange={(e)=>setCpnum(e.target.value)} placeholder="09XXXXXXXXX" 
                                        maxLength="11" minLength="11" value={cp_num} />
                            </div><br/>
                            <div className="border-top">
                                <p className="fw-bold" style={{fontSize: "15px"}}>Address</p>
                            </div>
                            <div className="input-group" >
                                    <label htmlFor="form3Example9c" className="input-group-text">House Number:</label>
                                    <input type="text" className="form-control" id="form3Example9c" name="address" placeholder="Address Line 1" onChange={(e) => setAddress(e.target.value)}  value={address}/>
                            </div><br/>
                           
                        </div>
                </div>
                </div>
            </div>
        <br/>
        
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="tandC" required/>
            <label className="form-check-label" htmlFor="tandC">I agree with the <Link to="">Terms and Conditions</Link>.</label>
        </div>
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="privacy" required/>
            <label className="form-check-label" htmlFor="privacy">I agree with the <Link to="">Privacy Policy</Link>.</label>
        </div>
        <br/>
        <input type="submit" className="btn text-capitalize" name="submit"  style={{backgroundColor: "#A2DBB7",
                                                               borderRadius: "5px", 
                                                                boxShadow: "5px 5px grey"}}/><br/><br/>
        <span>Already have an account? Login  
            <Link to="/login">Here</Link>
        </span>
    </form>
    
    <br/>
</section>   

    </div>
  )
}

export default Registration;