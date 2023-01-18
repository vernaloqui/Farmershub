import { useState } from 'react';
import { db } from "../config/Config";

function Newsletters() {
  
    const [email, setEmail] = useState('');
    
    const Subscribe = (e) =>{
        e.preventDefault();
        console.log(email);
        db.collection('Subscribers').doc().set({           
            Email: email
        })
        
        document.getElementById('emailBox').value = "";
        document.getElementById('notif').innerHTML=`<p>You will now receive special updates and promotional offers via your email. Thank you!</p>`;
        setTimeout(Clearnotif, 1000);         
        setEmail('');
    }

    function Clearnotif (){
        document.getElementById('notif').innerHTML="";
    }
    return (
      <div>
        <div>
          <form name="ValidFormSubs">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
  
            <div
              className="full-container Newsletter d-sm-block mx-5 text-center "
              style={{
                padding: "20px",
  
                borderRadius: "5rem",
                border: " 1px solid transparent",
                backdropFilter: " blur (1rem)",
  
                borderTopColor: "rgba(225, 225, 225, 225, 0.5)",
                borderBottomColor: "rgba(225, 225, 225, 225, 0.5)",
                borderRightColor: "rgba(225, 225, 225, 225, 0.5)",
                backgroundColor:
                  "linear-gradient(to right bottom, rgba(225, 225,225, 0.5), rgba(225,225,225,0.3))",
              }}
            >
              <h3>Subscribe to our Newsletter</h3>
              <p
                style={{
                  fontSize: "1.4rem",
                  color: "#073418",
                  paddingBottom: "15px",
                }}
                className="fw-lighter"
              >
                Stay up to date on specials and new merchandise, among other
                things. Directly to your inbox.
              </p>
              <div className="mb-3" id="notif"></div>
              <div className="input-group form-label">
                <input
                  type="email"
                  id="emailBox"
                  className="form-control"
                  style={{ borderRadius: "5rem", padding: "10px" }}
                  placeholder="Enter email address"
                  required onChange={(e) => setEmail(e.target.value)} 
                />
                <button
                  type="submit"
                  className="btn text-capitalize btn-sm"
                  style={{
                    backgroundColor: "#16773b",
                    borderRadius: "5rem",
                    padding: "10px",
                  }} onClick={Subscribe}
                >
                  <i className="bi bi-send-check-fill"></i> Subscribe
                </button>
                <div className="col justify-content-center">
                  <br />
                  <h4>
                    <a href="www.facebook.com">
                      <i
                        className="bi bi-facebook mx-4"
                        style={{ color: "#16773b" }}
                      ></i>
                    </a>
                    <a href="instagram.com">
                      <i
                        className="bi bi-instagram mx-4"
                        style={{ color: "#16773b" }}
                      ></i>
                    </a>
                    <a href="twitter.com">
                      <i
                        className="bi bi-twitter mx-4"
                        style={{ color: "#16773b" }}
                      ></i>
                    </a>
                    <a href="instagram.com">
                      <i
                        className="bi bi-linkedin mx-4"
                        style={{ color: "#16773b" }}
                      ></i>
                    </a>
                    <a href="youtube.com">
                      <i
                        className="bi bi-youtube mx-4"
                        style={{ color: "#16773b" }}
                      ></i>
                    </a>{" "}
                  </h4>
                </div>
              </div>
            </div>
           <div>
          </div>
          </form>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
  export default Newsletters;