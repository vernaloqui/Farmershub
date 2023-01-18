import {Row, Col} from 'react-bootstrap';
import banner from '../img/bannerNew.jpg';
import Trend from '../components/Trend';
import Latest from '../components/Latest';
import Testimonial from '../components/Testimonial';
import Newsletters from '../components/Newsletters';

function Home(){
    return (
        <div> 
    <section>
        <div className="container-fluid d-flex m-auto p-0" style={{position: 'relative'}}>
            <img src={banner} alt="..." className="d-block w-100" style={{opacity: '0.8'}}/>
            <div className="text-box" style={{position: 'absolute'}}>
                <h2>Farmer's Hub</h2>
                <h3>A moment on the lips, a lifetime on the hips. </h3>
            </div>
        </div>
        <br/>
        <br/>   
        <br/>
        <div className="container-fluid d-sm-block text-center">
            <br/>
            <Row className="g-2 m-1 d-inline-flex justify-content-center">
            <Col className="col-12 col-lg-3 col-md-3 p-1 m-3 h-100" style={{color:'#073418'}}>
                <div className="d-flex flex-column">        
                        <h4 className="fw-semibold ">
                            <i className="bi bi-headset"></i> &nbsp; Customer Service{" "}
                        </h4>{" "}
                        <hr />
                        <p className="fw-light font-monospace">
                            Call us at 0966-630-3633{" "}
                        </p>
                </div>
            </Col>
            <Col className="col-12 col-lg-3 col-md-3 p-1 m-3 h-100" style={{color:'#073418'}}>
                <div className="d-flex flex-column">        
                        <h4 className="fw-semibold ">
                            <i className="bi bi-wallet"></i>&nbsp; Cash on Delivery{" "}
                        </h4>{" "}
                        <hr />
                        <p className="fw-light font-monospace">
                            Money Back Guarantee{" "}
                        </p>
                </div>
            </Col>
            <Col className="col-12 col-lg-3 col-md-3 p-1 m-3 h-100" style={{color:'#073418'}}>
                <div className="d-flex flex-column">
                        <h4 className="fw-semibold ">
                            {" "}
                            <i className="bi bi-truck"></i> &nbsp; Secured Packaging{" "}
                        </h4>{" "}
                        <hr />
                        <p className="fw-light font-monospace">
                            thermoplastic polyester film
                        </p>
                </div>
            </Col>
            </Row>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

{/* trending categories */}         
<Trend></Trend>

<br />
{/* Latest products */}
<Latest></Latest>

{/* testimonials */}
<Testimonial></Testimonial>

{/* Newsletter */}
<Newsletters></Newsletters>
    </section>
    </div>
    )
}
export default Home;
