import React, { useState }  from "react";
import { auth, db, storage } from "../config/Config";
import { Link,  useNavigate } from "react-router-dom";


function FarmerPartner(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fName, setFName] = useState('');
    const [middle, setMiddle] = useState('');
    const [lName, setLName] = useState('');
    const [IDcard, setIDcard] = useState(null);
    const [storeName, setStoreName] = useState('');
    // const [itemList, setItemList] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    

    const SellerSignup = (e) =>{
        e.preventDefault();
        console.log('form submitted');
        console.log(email, password, fName, middle, lName, storeName);
        uploadID();
        auth.createUserWithEmailAndPassword(email, password).then((cred)=>{
            db.collection('Sellers').doc(cred.user.uid).set({
                email: email,
                password: password,
                fName: fName,
                lName: lName,
                middle: middle,
                storeName: storeName
            }).then(()=>{
                setEmail('');
                setPassword('');
                setFName('');
                setMiddle('');
                setLName('');
                setStoreName('');
                setError('');
                navigate('/sellerCenter');
            }).catch(err=>setError(err.message));
        }).catch(err=>setError(err.message));
    }
    const IDHandler = (e) => {
        let selectedFile = e.target.files[0];
        if(selectedFile && types.includes(selectedFile.type)){
            setIDcard(selectedFile);
            setError('');
        }
        else{
            setIDcard(null);
            setError('Please select a valid image type png, jpg or jpeg');
        }
    }

    const uploadID = (e) =>{
        
        const uploadTask = storage.ref(`img/${IDcard.name}`).put(IDcard);
        uploadTask.on('state_changed', snapshot =>{
            const progress =(snapshot.bytesTransferred/snapshot.totalBytes) *100;
            console.log(progress);
        }, err =>{
            setError(err.message)
        }, () =>{
            storage.ref('img').child(IDcard.name).getDownloadURL().then(url => {
                db.collection('Sellers').add({
                    IDcard: url
                }).then(()=>{
                    setIDcard('');
                    document.getElementById('idCard').value = '';
                }).catch(err => setError(err.message));
            })
        })
    }
    return(
        <section className="container mt-5">
            <form autoComplete="off" className="container border border-secondary rounded p-4 form-group" onSubmit={SellerSignup}>
                <div className="accordion accordion-flush" id="RegisterAccount">
                    {/* <!--Log in Info--> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="RegHeading">
                            <button className="accordion-button btn btn-outline fw-bold" 
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#RegBody"
                                    aria-expanded="true"
                                    aria-controls="RegBody">
                                    Log in details
                            </button>
                        </h2>
                        
                        <div className="accordion-collapsee"
                            id="RegBody"
                            aria-labelledby="#RegHeading"
                            data-bs-parent="#RegisterAccount">
                                <div className="accordion-body text-justify">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" >Email address:</span>
                                        <input type="email" name="email" id="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                                    </div><br/>
                                    <div className="input-group mb-3">
                                        <label htmlFor="password" className="input-group-text">Password:</label>
                                        <input type="password" className="form-control" id="password" onChange={(e) =>setPassword(e.target.value)} value={password}/>
                                        {/* <label htmlFor="password" className="input-group-text">Confirm Password:</label>
                                        <input type="password" className="form-control" id="confirmpassword"/> */}
                                    </div><br/>
                                </div>
                        </div>
                    </div>
                    {/* <!--Personal Info--> */}
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
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">First Name:</span>
                                        <input type="text" className="form-control" id="fName" onChange={(e)=>setFName(e.target.value)} value={fName}/>
                                        <span className="input-group-text">Middle Initial:</span>
                                        <input type="text" className="form-control" id="mName" onChange={(e)=> setMiddle(e.target.value)} value={middle}/>
                                        <span className="input-group-text">Last Name:</span>
                                        <input type="text" className="form-control" id="lName" onChange={(e)=>setLName(e.target.value)} value={lName}/>
                                    </div><br/>
                                    {/* <div className="input-group mb-3">
                                        <label htmlFor="dob" className="input-group-text">Date of Birth:</label>
                                        <input type="date" className="form-control" id="dob"/>
                                        <label htmlFor="phoneNum" className="input-group-text">Cellphone number:</label>
                                        <input type="tel" className="form-control" id="phoneNum" placeholder="09XXXXXXXXX" maxLength="11" minLength="11"/>
                                    </div><br/> */}
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Upload ID card:</span>
                                        <input type="file" className="form-control" id="idCard" onChange={IDHandler}/>
                                    </div>
                                        <p style={{fontSize: '12px'}}>Max of 5MB with jpg, jpeg, pdf, png file types only</p>
                                    
                                        {/* <div className="border-top">
                                            <p className="fw-bold" style={{fontSize: '15px'}}>Address</p>
                                        </div>
                                        <div className="input-group mb-3">
                                            <label htmlFor="Address1" className="input-group-text">House Number:</label>
                                                <input type="text" className="form-control" id="Address1" required/>
                                                <label htmlFor="Address2" className="input-group-text">Street:</label>
                                                <input type="text" className="form-control" id="Address2" required/> 
                                        </div><br/>
                                        <div className="input-group mb-3">
                                            <label htmlFor="Barangay" className="input-group-text">Barangay:</label>
                                            <input type="text" className="form-control" id="Barangay"/>
                                            <label htmlFor="municipality" className="input-group-text">Municipality</label>
                                            <input type="text" className="form-control" id="municipality"/>
                                        </div><br/>
                                        <div className="input-group mb-3">
                                            <label htmlFor="province" className="input-group-text">Province:</label>
                                            <input type="text" className="form-control" id="province"/>
                                            <label htmlFor="zipCode" className="input-group-text">Postal Code:</label>
                                            <input type="number" className="form-control" name="zipCode" id="zipCode"/> 
                                        </div><br/> */}
                                </div>
                        </div>
                    </div>
                    {/* <!--Billing Info--> */}
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="BillingHeading">
                            <button className="accordion-button fw-bold collapsed" 
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#BillingBody"
                                    aria-expanded="true"
                                    aria-controls="BillingBody">
                                    Billing Information
                            </button>
                        </h2>
                        
                        <div className="accordion-collapse collapse"
                            id="BillingBody"
                            aria-labelledby="#BillingHeading"
                            data-bs-parent="#RegisterAccount">
                                
                                <div className="accordion-body text-justify">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Payment" id="card"/>
                                        <label className="form-check-label" htmlFor="card">Card
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Payment" id="Gcash"/>
                                        <label className="form-check-label" htmlFor="Gcash">Gcash
                                        </label>
                                    </div>
                                    
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Payment" id="maya"/>
                                        <label className="form-check-label" htmlFor="maya">Maya
                                        </label>
                                    </div>
                                    
                                    <p className="fw-bold" style={{fontSize: '15px'}}>Credit card details</p>
                                    <br/>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="EmailUser">Credit card number:</span>
                                        <input type="number" name="CCnum" id="CCnum" className="form-control" minLength="16" maxLength="16"/>
                                    </div><br/>
                                    <div className="input-group mb-3">
                                        <label htmlFor="CCname" className="input-group-text">Cardholder's name:</label>
                                        <input type="text" className="form-control" id="CCname"/>
                                    </div><br/>
                                    <div className="input-group mb-3">
                                        <label htmlFor="expDate" className="input-group-text">Expires on:</label>
                                        <input type="month" className="form-control" id="expDate"/>
                                    </div><br/>
                                </div>
                        </div>
                    </div> */}
                    {/* <!--Store Info--> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="StoreHeading">
                            <button className="accordion-button fw-bold collapsed" 
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#StoreBody"
                                    aria-expanded="true"
                                    aria-controls="StoreBody">
                                    Store Information
                            </button>
                        </h2>
                        
                        <div className="accordion-collapse collapse"
                            id="StoreBody"
                            aria-labelledby="#StoreHeading"
                            data-bs-parent="#RegisterAccount">
                                
                                <div className="accordion-body text-justify">
                                    <p className="fw-bold" style={{fontSize: '15px'}}>Store and Product Information</p>
                                    <br/>
                                    
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Store name:</span>
                                        <input type="text" name="storeName" id="storeName" className="form-control" onChange={(e)=>setStoreName(e.target.value)} value={storeName}/>
                                    </div><br/>
                                    {/* <p style={{fontSize: '12px'}}>Please select the category/ies of products you want to sell.</p>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="fruits" value="fruits"/>
                                        <label className="form-check-label" htmlFor="fruits">  Fruits</label><br/>
                                        <input type="checkbox" className="form-check-input" id="veges" value="veges"/>
                                        <label className="form-check-label" htmlFor="veges">Vegetables</label><br/>
                                        <input type="checkbox" className="form-check-input" id="Spices" value="spices"/>
                                        <label className="form-check-label" htmlFor="spices">Spices</label><br/>
                                        
                                    </div> */}
                                </div>
                        </div>
                    </div>

                </div>

                <br/>
                
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="tandC"/>
                    <label className="form-check-label" htmlFor="tandC">I agree with the <a href="./Login">Terms and Conditions</a>.</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="privacy"/>
                    <label className="form-check-label" htmlFor="privacy">I agree with the <a href="./Login">Privacy Policy</a>.</label>
                </div>
                <br/>
                <button type="submit" className="btn text-capitalize" style={{backgroundColor: '#A2DBB7', borderRadius: '5px', boxShadow: '5px', color: 'grey'}} >Register Account</button><br/><br/>
                <Link to="/sellerLogin"><button type="button" className="btn btn-link text-muted" style={{textDecoration:'none'}}>Already have an account? Log in here.</button></Link>
                
            </form>
            {error && <div className="error-msg">{error}</div>}
            <br/>
        </section>
    )
}
export default FarmerPartner;
