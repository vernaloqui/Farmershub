
import { useState } from 'react';
import { db } from "../config/Config";

function Help() {

    const [names, setnames] = useState('');
    const [emails, setemails] = useState('');
    const [messages, setmessages] = useState('');

    const submitMessage = (e) =>{
        e.preventDefault();
        db.collection('Messages').doc().set({
            Name: names,
            Email: emails,
            Text: messages
        })
        setnames('');
        setemails('');
        setmessages('');
        document.getElementById('notif').innerHTML=`<p>Your inquiry has been sent. Please expect a response within 24 hours. Thank you!</p>`;
        setTimeout(Clearnotif, 1000); 
    }

    function Clearnotif (){
        document.getElementById('notif').innerHTML="";
    }


    return (

        <section>
            <h3 className="fw-bold mt-5 ms-3">Frequently Asked Questions</h3>
            {/* <!--FAQ section--> */}
            <div className="m-3">
                <div className="accordion" id="myAccordion">
                    {/* <!--Question #1--> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                <i className="bi bi-question-diamond-fill" >&nbsp;</i> Where are your fruits and vegetables sourced?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse ">
                            <div className="card-body">
                                <p className="ms-5 mt-4" >
                                    We get our products from farmers all over the country. We import fruits and vegetables that are not grown locally. </p>
                                <br />
                            </div>
                        </div>
                    </div>
                    {/* <!--Question #1-->
            <!--Question #2--> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"> <i className="bi bi-question-diamond-fill" >&nbsp;</i> How should your products be stored? </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse">
                            <div className="card-body">
                                <p className="ms-5 mt-4" > This varies depending on the product. In general, store leafy vegetables in the refrigerator. Root crops, such as potatoes and onions, can be stored at room temperature in a cool, dry place. Fruits should be refrigerated. </p>
                            </div>
                        </div>
                    </div>
                    {/* <!--Question #2-->
            <!--Question #3--> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseThree"> <i className="bi bi-question-diamond-fill" >&nbsp;</i> How quickly can you deliver? </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse ">
                            <div className="card-body">
                                <p className="ms-5 mt-4"> We have our own delivery service and can deliver to your door the next day (except Sundays) if you place your order before the daily cutoff time of 8 p.m. </p>
                            </div>
                        </div>
                    </div>
                    {/* <!--Question #3-->
            <!--Question #4--> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseFour"> <i className="bi bi-question-diamond-fill" >&nbsp;</i> How do you deliver our orders? </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse ">
                            <div className="card-body">
                                <p className="ms-5 mt-4"> We deliver your orders using our fleet of refrigerated vans to ensure the freshness of your order. </p>
                            </div>
                        </div>
                    </div>
                    {/* <!--Question #4-->
            <!--Question #5--> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseFive"> <i className="bi bi-question-diamond-fill" >&nbsp;</i> If I am not satisfied with my orders, what are my options? </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse ">
                            <div className="card-body">
                                <p className="ms-5 mt-4"> Due to the nature of our products, it is our policy that once the items are received and accepted, it is assumed that you have inspected and are satisfied with our products. We do allow you to reject items on the spot if you are dissatisfied with them. As a result, we strongly recommend that you or your representative inspect the delivered items one by one. </p>
                            </div>
                        </div>
                    </div>
                    {/* <!--Question #5-->
            <!--Question #6--> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseSix"> <i className="bi bi-question-diamond-fill" >&nbsp;</i> Do you accept bulk orders? </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse ">
                            <div className="card-body">
                                <p className="ms-5 mt-4"> We certainly do! Large orders htmlFor businesses, restaurants, and parties are welcome. If you have any further questions, please contact us via email and we will get back to you. </p>
                            </div>
                        </div>
                    </div>
                    {/* <!--Question #6--> */}
                </div>
                {/* <!--FAQ section-->
        <!--Contact Us Form--> */}
                <div className="form-area">
                    <div className="container">
                        <div className="row single-form g-0">
                            <div className="col-sm-12 col-lg-6">
                                <div className="left">
                                    <h2>
                                        <span>Get in</span>
                                        <br />touch with us!
                                    </h2>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <div className="right">
                                    <i className="bi bi-caret-right-fill" style={{ color: '#A2DBB7' }}></i>
                                    <form onSubmit={submitMessage}>
                                        <div className="mb-3" id="notif">
                                           
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="names" className="form-label">Your Name</label>
                                            <input type="text" className="form-control" id="names" placeholder="Paula Joyce" name="names" value={names} onChange={(e) => setnames(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email messages</label>
                                            <input type="emails" className="form-control" id="emails" placeholder="paula@example.com" name="emails" value={emails} onChange={(e) => setemails(e.target.value)} />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="messages" className="form-label">Message</label>
                                            <textarea type="password" className="form-control" id="messages" style={{ resize: 'none' }} name="messages" value={messages} onChange={(e) => setmessages(e.target.value)}></textarea>

                                        </div>
                                        <input type="submit" name="submit" value="Submit Inquiry" className="btn" />

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Help;
