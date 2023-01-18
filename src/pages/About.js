import image1 from "../img/image1.jpg";
import "../components/about.css";


function About(){
    return(
        <section id="about" className="container-fluid">
            <div className="about-1 text-justify">
           
            <h1>About Us</h1>

            <div className="container">
            <p> In the Philippines, majority of the farmers belong to the low-income className. Thus, the conventional supply chain of fresh produce in the Philippines can be expressed as follows: farm-to-middleman-to-second-middleman-to-third-middleman-to-fourth-middleman-to-fifth-middleman-to-table. There’s extra cost that goes for each middle-man who in turn just drive up the prices of the agricultural crops in the market. With recent events of importation of several produce from neighboring countries, most of the Filipinos favor the low-priced imported goods over the local crops of our farmers. A Farmers' Hub (FH) is a one-stop commercial service platform where smallholders can access quality agri-inputs, farm machinery, markets, finance, and knowledge.
            </p>
                </div>
            </div>  
            <div className="container-fluid">
                    <img src={image1} alt=".." className="d-block w-100"/> 
            </div>
            <br/>
            <div id="about-2 container content-box-lg">
                <div className="row">
                    <div className="col-md-4 about-item text-center">
                        <i className="bi bi-globe" style={{color:'#073418'}}></i>
                        <h3>Mission</h3>
                        <hr/>
                        <p>Helps the farmers/agricultural producers minimize,if not fully eliminated, the negative effects of middlemen by creating an online marketplace where they can showcase their produce to direct consumers. This marketplace will help promote local farm communities and at the same time provide an ease of access for consumers to buy fresh and healthy products at a competitive price.
                        </p>
                    </div>
                    <div className="col-md-4 about-item text-center">
                        <i className="bi bi-book" style={{color:'#073418'}}></i>
                        <h3>Vision</h3>
                        <hr/>
                        <p> Farmers can access information needed to produce, add value, market their commodities and develop effective linkages with input agencies such as financial service providers, as well as output markets.
                        </p>
                    </div>
                    <div className="col-md-4 about-item text-center">
                        <i className="bi bi-pencil" style={{color:'#073418'}}></i>
                        <h3>OBJECTIVE</h3>
                        <hr/>
                        <p>Improve the conditions of farmers in the Food Chain (to minimize imbalances and disadvantage of farmers with intermediate distributors and other agents in the food and agriculture). Increased profitability of farms and purchasing power of farmers. Expand export opportunities and new markets or to sell the produce for profit in the local or export market.
                        </p>
                    </div>
                </div>
            </div>
          
        </section>
    )
}
export default About;
