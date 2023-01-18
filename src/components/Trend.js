import sibuyas from "../img/sibuyas.jpg";
import sili from "../img/sili labuyo.jpg";
import saluyot from "../img/saluyot.jpg";
import mangga from "../img/man.jpg";
import sampalok from "../img/sampalok.png";
import pina from "../img/piña.png";
import { Row } from "react-bootstrap";

function Trend() {
  return (
    <div>
      <div>
        <br />
        <div
          className=" d-sm-block text-center"
          style={{ marginTop: "0", position: "relative" }}
        >
          <br />

          <h3 className="display-6 fw-bold"> Trending Products</h3>

          <Row>
            <div className="row g-2 d-flex justify-content-center">
              <div
                className="col-12 col-lg-3 col-md-6  m-1 p-5"
                style={{ color: "#073418" }}
              >
                <div className="d-flex flex-column">
                  <div>
                    <img
                      src={sibuyas}
                      alt="farmer1"
                      className="card-img img-thumbnail"
                      style={{ borderRadius: "50%", padding: "20px" }}
                    />

                    <h2 className="display-7 fw-semibold lh-2 mb-2">Sibuyas</h2>
                    <hr />
                    <p className="fw-light font-monospace">
                      Sibuyas Tagalog or shallots is a small variety of red
                      onions.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-lg-3 col-md-6  m-1 p-5"
                style={{ color: "#073418" }}
              >
                <div className="d-flex flex-column">
                  <div>
                    <img
                      src={sili}
                      alt="farmer1"
                      className="card-img img-thumbnail"
                      style={{ borderRadius: "50%", padding: "20px" }}
                    />

                    <h2 className="display-7 fw-semibold lh-3 mb-2">
                      Sili Labuyo
                    </h2>
                    <hr />
                    <p className="fw-light font-monospace">
                    It's Tagalog name translates to “wild chili” in English.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-lg-3 col-md-6  m-1 p-5"
                style={{ color: "#073418" }}
              >
                <div className="d-flex flex-column">
                  <div>
                    <img
                      src={saluyot}
                      alt="farmer1"
                      className="card-img img-thumbnail"
                      style={{ borderRadius: "50%", padding: "20px" }}
                    />

                    <h2 className="display-7 fw-semibold lh-2 mb-2">Saluyot</h2>
                    <hr />
                    <p className="fw-light font-monospace">
                    Saluyot is rich in vitamins E and C, and antioxidants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>

        <Row>
          <div
            className=" d-sm-block text-center"
            style={{ marginTop: "0", position: "relative" }}
          >
            <div className="row g-2 d-flex justify-content-center">
              <div
                className="col-12 col-lg-3 col-md-6  m-1 p-5"
                style={{ color: "#073418" }}
              >
                <div className="d-flex flex-column">
                  <div>
                    <img
                      src={sampalok}
                      alt="farmer1"
                      className="card-img img-thumbnail"
                      style={{ borderRadius: "50%", padding: "20px" }}
                    />

                    <h2 className="display-7 fw-semibold lh-2 mb-2">
                      Sampalok
                    </h2>
                    <hr />
                    <p className="fw-light font-monospace">
                    Sampalok, is a hardwood tree known as Tamarindus indica
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-lg-3 col-md-6  m-1 p-5"
                style={{ color: "#073418" }}
              >
                <div className="d-flex flex-column">
                  <div>
                    <img
                      src={mangga}
                      alt="farmer1"
                      className="card-img img-thumbnail"
                      style={{ borderRadius: "50%", padding: "20px" }}
                    />

                    <h2 className="display-7 fw-semibold lh-3 mb-2">
                      Manggo
                    </h2>
                    <hr />
                    <p className="fw-light font-monospace">
                    Mango is the national fruit of the Philippines
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-lg-3 col-md-6  m-1 p-5"
                style={{ color: "#073418" }}
              >
                <div className="d-flex flex-column">
                  <div>
                    <img
                      src={pina}
                      alt="farmer1"
                      className="card-img img-thumbnail"
                      style={{ borderRadius: "50%", padding: "20px" }}
                    />

                    <h2 className="display-7 fw-semibold lh-2 mb-2">Pinya</h2>
                    <hr />
                    <p className="fw-light font-monospace">
                    The Filipino word is from the Spanish piña. Pineapple plant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
}
export default Trend;