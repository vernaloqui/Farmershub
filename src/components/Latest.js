import veggie from "../img/bles.jpg";
import ulam from "../img/Ulam.png";
import fruit from "../img/fruitBasket.jpg";
import salad from "../img/salad.jpg";
import pantry from "../img/pantry.png";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Latest() {
  return (
    <div>
      <div>
        <Row>
          <div className=" d-sm-block text-center">
            <br />
            <h3 className="display-6 fw-bold">Featured Categories</h3>
            <br />

            <div className="row g-2d-flex justify-content-center ">
              <div
                className="col-12 col-lg-3 col-md-6  m-1 p-5"
                style={{ color: "#073418" }}
              >
                <div className="d-flex flex-column">
                  <div>
                    <img
                      src={ulam}
                      alt="farmer1"
                      className="card-img img-thumbnail"
                      style={{ borderRadius: "50%", padding: "20px" }}
                    />

                    <h2 className="display-7 fw-semibold lh-2 mb-2">
                      Ulam Bundles
                    </h2>
                    <hr />
                    <p className="fw-light font-monospace">
                    The Ulam Bundle includes a variety of fresh veggies, leafy greens, and spices. Ideal for serving to family or friends. Sulit and convenient.
                    </p>
                    <Link
                      to="/best"
                      className="btn mt-auto fw-light font-monospace"
                      style={{ backgroundColor: "#16773b" }}
                    >
                      Shop Now
                    </Link>
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
                      src={salad}
                      alt="farmer1"
                      className="card-img img-thumbnail"
                      style={{ borderRadius: "50%", padding: "20px" }}
                    />

                    <h2 className="display-7 fw-semibold lh-2 mb-2">
                      Salad Set
                    </h2>
                    <hr />
                    <p className="fw-light font-monospace">
                    Need a side dish? Grab the salad set! A typical salad starts with raw greens, such as lettuce, spinach, kale, mixed greens or arugula.
                    </p>
                    <Link
                      to="/best"
                      className="btn mt-auto fw-light font-monospace"
                      style={{ backgroundColor: "#16773b" }}
                    >
                      Shop Now
                    </Link>
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
                      src={fruit}
                      alt="farmer1"
                      className="card-img img-thumbnail"
                      style={{ borderRadius: "50%", padding: "20px" }}
                    />

                    <h2 className="display-7 fw-semibold lh-2 mb-2">
                      Fruits Baskets
                    </h2>
                    <hr />
                    <p className="fw-light font-monospace">
                    Bring color to your kitchen with a basket full of fruits delivered fresh to your home by Farmer's Hub! Avoid the Holiday crowds and long lines!                    </p>
                    <Link
                      to="/best"
                      className="btn mt-auto fw-light font-monospace"
                      style={{ backgroundColor: "#16773b" }}
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-2d-flex justify-content-center ">
              <div
                className="col-12 col-lg-3 col-md-6  m-1 p-5"
                style={{ color: "#073418" }}
              >
                <div className="d-flex flex-column">
                  <div>
                    <img
                      src={pantry}
                      alt="farmer1"
                      className="card-img img-thumbnail"
                      style={{ borderRadius: "50%", padding: "20px" }}
                    />

                    <h2 className="display-7 fw-semibold lh-2 mb-2">
                      Pantry Essentials
                    </h2>
                    <hr />
                    <p className="fw-light font-monospace">
                    If you're looking for a gift for your loved ones who love to cook, this is the perfect gift set. You can also have it in your pantry.                    </p>
                    <Link
                      to="/best"
                      className="btn mt-auto fw-light font-monospace"
                      style={{ backgroundColor: "#16773b" }}
                    >
                      Shop Now
                    </Link>
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
                      src={veggie}
                      alt="farmer1"
                      className="card-img img-thumbnail"
                      style={{ borderRadius: "50%", padding: "20px" }}
                    />

                    <h2 className="display-7 fw-semibold lh-2 mb-2 ">
                      {" "}
                      Vegetables
                    </h2>
                    <hr />
                    <p className="fw-light font-monospace">
                    Fresh veggies with nutritional advantages are now available for delivery directly to your door. Order your weekly groceries and have them delivered farm fresh.                    </p>
                    <Link
                      to="/veggies"
                      className="btn mt-auto fw-light font-monospace"
                      style={{ backgroundColor: "#16773b" }}
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>

              <br />
              <br />
            </div>
            <br />
            <br />
          </div>
        </Row>
      </div>

      <br />
      <br />
    </div>
  );
}
export default Latest;
