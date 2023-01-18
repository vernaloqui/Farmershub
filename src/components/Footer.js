import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from '../config/Config';

function Footer(){

    function GetUserUid(){
        const [uid, setUid] = useState(null);
        useEffect(()=>{
            auth.onAuthStateChanged(user =>{
                if(user){
                    setUid(user.uid);
                }
            })
        }, [uid, setUid])
        return uid;
    }

    const uid = GetUserUid();
    console.log(uid);

    return(
        <section>
            <br/>
            <footer className="container-fluid text-center text-dark" style={{backgroundColor:'#F8FEFA'}}>   
            <hr/>
            <div className="row">
                {/* <!--Paragraph--> */}
                <div className="col d-flex justify-content-center">
                    <p className="h5">
                        "A moment on the lips, a lifetime on the hips. Always eat what's right. If you want to run for long, avoid junk food...
                <br/> <br/>
                    Be Fit by Eating Fresh."
                </p> 
                </div>
                {/* <!--Icons--> */}
                <div className="col justify-content-center">
                    <div><p style={{fontSize: '18px', color: '#073418', paddingBottom:'15px'}} className="text-dark text-uppercase fw-bold">Follow us </p></div>
                    <p><a href="www.facebook.com"><i className="bi bi-facebook mx-4" style={{color:'#A2DBB7'}}></i></a>
                    <a href="instagram.com"><i className="bi bi-instagram mx-4" style={{color:'#A2DBB7'}}></i></a>
                    <a href="twitter.com"> <i className="bi bi-twitter mx-4" style={{color:'#A2DBB7'}}></i></a></p>
                </div>
            </div>
            <br/>
            <div className="row text-center p-3 d-flex justify-content-center" style={{backgroundColor: '#A2DBB7'}}>
                
                <div className="col-md-2">
                    <h6 className="text-uppercase fw-bold">
                        <Link to="/farmerPartner" style={{color:'#073418'}}>Be a Farmer Partner</Link>
                    </h6>
                </div>

                <div className="col-md-2">
                <h6 className="text-uppercase fw-bold">
                    <p style={{color:'#073418'}}>  © 2020 Copyright</p>
                </h6>
                </div>

                <div className="col-md-2">
                <h6 className="text-uppercase fw-bold">
                    {uid&&<>
                    <Link to="/sellerCenter" style={{color:'#073418'}}>Seller Center</Link>
                    </>}
                    {!uid&&<>
                    <Link to="/sellerLogin" style={{color:'#073418'}}>Seller Center</Link>
                    </>}
                </h6>
                </div>
            </div>
            </footer>
        </section>
    )
}

export default Footer;
