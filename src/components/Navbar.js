import { Link, useNavigate  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from '../config/Config';
import logo from '../img/logo.png';
import { FaUserCircle } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ToastContainer} from 'react-toastify';
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER, setIsCartOpen } from '../redux/authSlice';

function Navbar(){
    
    const navigate = useNavigate();
    const [displayName, setdisplayName] = useState("");

    const dispatch = useDispatch();

    // Monitor currently sign in user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log(user)
          
            if (user.displayName == null) {
                const u1 = user.email.substring(0, user.email.indexOf("@"));
                const uName = u1.charAt(0).toUpperCase() +  u1.slice(1);
                // console.log(uName);
                setdisplayName(uName);
            } else {
                setdisplayName(user.displayName);

            }

            dispatch
            (SET_ACTIVE_USER({
                email: user.email,
                userName: user.displayName ? user.displayName : displayName,
                userID: user.uid,
            })
            );
              // ...
            } else {
              // User is signed out
              setdisplayName("");
              dispatch(REMOVE_ACTIVE_USER());
              // ...
            }
          });
    }, [dispatch, displayName]);



const logoutUser = (e) =>{
    signOut(auth).then(() => {
        // Sign-out successful.
        // toast.success("Successfully Logout!!!");
        navigate("/");

      }).catch((error) => {
        // An error happened.
        // toast.error(error.message);
      });
};

    return(
        <div >
        <ToastContainer />
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#A2DBB7"}}>
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={logo} className="rounded-circle border border-2" style={{width:"75px"}} alt='...'/>
            </Link>
            <button className="navbar-toggler"
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarMark" 
                    aria-controls="navbarMark" 
                    aria-expanded="false" 
                    aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMark">
                <ul className="navbar-nav text-uppercase">
                    <li className="nav-item">
                        <Link className="nav-link" to="/produce" style={{color:'#073418'}}>Farm Produce</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" style={{color:'#073418'}}>About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/help"  style={{color:'#073418'}}>Help</Link>
                    </li>
                </ul>
                
            </div>
                
                {/* <form className="searchCart d-flex ms-auto" role="search">
                    <input type="text" id="userInput" className="form-control" placeholder="Search" aria-label="search"/>
                    <button type="submit" className="btn btn-outline" style={{backgroundColor:'#073418',color:'#A2DBB7'}}>Search</button>
                </form>   */}
                
                <div className="px-2 justify-content-center">
                    {!displayName&&<>
                        <button className="btn btn-outline" style={{backgroundColor:'#073418',color:'#A2DBB7', float:'right'}}>
                            <Link className="nav-link text-white" to="/login">Log in</Link>
                        </button>
                    </>}

                    {displayName&&<>
                        <div><Link className="nav-link" to="/" style={{color:'#073418'}}><FaUserCircle size={16}/> Hi, {displayName}</Link></div>
                        {/* <div className="cartCounter">{totalQty}</div> */}
                        <Link className="nav-link" to="/cart" style={{color:'#073418', backgroundColor:'Transparent', backgroundRepeat:'no-repeat', border: 'none',cursor:'pointer', overflow: 'hidden', outline:'none'}}  onClick={() => dispatch(setIsCartOpen({}))}>
                            <i className="bi bi-cart4" style={{fontSize:'30px'}}></i>
                        </Link>
                        <div className="btn btn-outline" style={{backgroundColor:'#073418',color:'#A2DBB7'}} onClick={logoutUser}>LOGOUT</div>
                    </>}
                    
                    
                </div>
                
            
            
                    
            </div>
        </nav>
        </div>
    )
}


export default Navbar;