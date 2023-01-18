import farmerOne from "../img/testi1.png";
import farmertwo from "../img/testi2.png";
import farmerthree from "../img/testi3.png";
import farmersMin from "../img/FarmersMin.jpg";
import { Row } from "react-bootstrap";


function Testimonial() {
  return (
    <div>
      {/* testimonials */}
      <section className="full-container">
        <img
          src={farmersMin}
          alt="bannerTwo"
          className="card-img img-thumbnail"
        />

        <div className="row"></div>

        <br />
        <div
          className="container d-sm-block text-center"
          style={{ marginTop: "-18rem", position: "relative" }}
        >
          <br />

          <h3 className="display-6 fw-bold  text-light">
            <u>Testimonial </u>
          </h3>

          <Row>
            <div className="row g-2 d-flex justify-content-center">
              <div
                className="col-12 col-lg-3 col-md-6  m-1 p-4"
                style={{ color: "#073418" }}
              >
                <div className="d-flex flex-column">
                  <p className="font-monospace text-light">
                    "Farmer's Hub help increase our marketing sales and reduce
                    product waste."
                  </p>
                  <div>
                    <img
                      src={farmertwo}
                      alt="farmer1"
                      className="card-img img-thumbnail"
                      style={{ borderRadius: "40%", padding: "15px" }}
                    />
                    <h4 className="fw-semibold ">
                      <br />
                      Imee Perez{" "}
                    </h4>{" "}
                    <hr />
                    <p className="fw-light font-monospace">Farmer One</p>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-lg-3 col-md-6  m-1 p-4"
                style={{ color: "#073418" }}
              >
                <div className="d-flex flex-column">
                  <p className="font-monospace text-light">
                    "Farmer's Hub has been a huge benefit to us farmers in terms
                    of promoting our food items."
                  </p>
                  <div>
                    <img
                      src={farmerOne}
                      alt="farmer1"
                      className="card-img img-thumbnail"
                      style={{ borderRadius: "40%", padding: "15px" }}
                    />
                    <h4 className="fw-semibold ">
                      <br />
                      Juan Dela Cruz{" "}
                    </h4>{" "}
                    <hr />
                    <p className="fw-light font-monospace">Farmer Two</p>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-lg-3 col-md-6  m-1 p-4"
                style={{ color: "#073418" }}
              >
                <div className="d-flex flex-column">
                  <p className="font-monospace text-light" >
                    "Farmer's Hub assists us in selling our fresh items to our
                    valued customers online."
                  </p>
                  <div>
                    <img
                      src={farmerthree}
                      alt="farmer1"
                      className="card-img img-thumbnail"
                      style={{ borderRadius: "40%", padding: "15px" }}
                    />
                    <h4 className="fw-semibold ">
                      <br />
                      Jane Marcos{" "}
                    </h4>{" "}
                    <hr />
                    <p className="fw-light font-monospace">Farmer Three</p>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </div>
  );
}
export default Testimonial;
