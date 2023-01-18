import { useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {auth} from '../config/Config';

function SellerLogin(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    let navigate = useNavigate();

    const login = (e) =>{
        
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() =>{
            setEmail('');
            setPassword('');
            setError('');
            navigate('/sellerCenter');
        }).catch(err => setError(err.message));
    }
       
    return (
        
    <section className="container mt-2 w-25">
        
    
        <p className="h4  text-center">Seller Login
            
        </p>
        <br/>
        <br/>

        <div className="mb-3">
        <form className="logIn container border border-secondary rounded p-4" 
            style={{
                    padding: "5rem 2.5rem",
                    borderRadius: "1rem",
                    border: "1px solid transparent",
                    backdropFilter: "blur (1rem)",
                    boxShadow: "1.3rem 1.3rem 1.3rem rgba(0,0,0, 0.5)",
                    borderTopColor: "rgba(225, 225, 225, 225, 0.5)",
                    borderLeftColor: "rgba(225, 225, 225, 225, 0.5)",
                    borderBottomColor: "rgba(225, 225, 225, 225, 0.5)",
                    borderRightColor: "rgba(225, 225, 225, 225, 0)"
            }}>

            
            <div className="mail">

            <label className="form-label">Email address</label>
            <input type="text" name='email' id='email' className="form-control" placeholder="example@gmail.com" 
                   value={email} onChange={(e) => setEmail(e.target.value)} />
            
            </div>
            <br/>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name='password' value={password} 
                        onChange={(e) => setPassword(e.target.value)} required/>
            </div>

            <br/>

            
            <button type="button" className="btn" style={{backgroundColor:'#A2DBB7', borderRadius:'5px', padding:'5px',
            boxShadow:'5px 5px grey'}} onClick={login}>Log in</button><br></br>
{/* 
            <button type="button" className="btn btn-link text-muted" style={{textDecoration:'none', marginLeft: '80%'}} 
            data-bs-toggle="modal" data-bs-target="#forgotPw">Forgot password</button> */}
            <p>No account yet?</p>
                <Link type="button" 
                className="text-muted" 
                to="/farmerPartner"
                style={{textDecoration:'none'}}>Register here
                </Link>
            {/* </div> */}
        </form>
        </div>

        {/* <!--Modal--> */}
        <div className="modal fade" id="forgotPw" tabIndex="-1">
            <div className="modal-dialog"> 
                <div className="modal-content">
                {/* <!--start of modal header--> */}
                <div className="modal-header">
                    <h5 className="modal-title text-center" id="modalTitle">
                        Forgot Password</h5>
                        <button className="btn-close" 
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="close">
                        </button>  
                </div>
                {/* <!--End of modal header--> */}
                {/* <!--start of modal body--> */}
                <form name="ValidFormModal"> 
                <div className="modal-body">
                    <p className="fst-italic">Input your email address so we can send you a link to reset your password.</p>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="modalEmailUser">Email address:</span>
                        <input type="email" name="ValidForgetPass" id="modalemail" className="form-control"/>
                    </div>
                </div>
                {/* <!--End of modal body--> */}
                {/* <!--start of modal footer--> */}
                <div className="modal-footer">
                    <button className="btn" 
                            type="button" style={{backgroundColor:'#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}>
                            OK
                    </button>

                </div>
                
                </form>
                {error && <span className="error-msg">{error}</span>}

                {/* <!--End of modal footer--> */}
                </div>
            </div>
        </div>
    </section>
    )
}
export default SellerLogin;