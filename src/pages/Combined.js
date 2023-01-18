import { useState} from 'react';
import Banner from '../components/Banner'
import banner from "../img/fruitsPage.png"
import Veggies from '../components/Veggies';
import Sherbs from '../components/Sherbs';
import Fruits from '../components/Fruits';
import BestSellers from '../components/BestSellers';


function Produce(){
    const [showtab, setShowtab] = useState(1);   
    const handletab = (e) => {
        setShowtab(e);
    }

    const style = {
        color :'#073418',
        backgroundColor: '#A2DBB7'
     }
     return (
        
        <div className='checkout'>
        
     
          <section>
                <Banner img={banner}/>
                <div className="container-fluid" >
                    {/* <!--Navbar to the top for Product Categories--> */}
                    <ul className="indicator nav flex-row " style={{backgroundColor:'#A2DBB7'}}>
                        <li className="nav-item border ">
                            <button className={showtab===1 ?"nav-link active bg-light" : "nav-link " } id="All" to="/all" style={style} onClick={()=>handletab(1)}>All</button>
                        </li>
                        <li className="nav-item border">
                            <button className={showtab===2 ?"nav-link active bg-light" : "nav-link " } id="Vegetables" to="/veggies" style={style} onClick={()=>handletab(2)}>Vegetables</button>
                        </li>
                        <li className="nav-item border" >
                            <button className={showtab===3 ?"nav-link active bg-light" : "nav-link " } id="Fruits" to="/fruits" style={style} onClick={()=>handletab(3)}>Fruits</button>
                        </li>
                        <li className="nav-item border">
                            <button className={showtab===4 ?"nav-link active bg-light" : "nav-link " } id="SHerbs" to="/sherbs" style={style} onClick={()=>handletab(4)}>Spices and Herbs</button>
                        </li>
                        <li className="nav-item border">
                            <button className={showtab===5 ?"nav-link active bg-light" : "nav-link " } id="Best" to="/best" style={style} onClick={()=>handletab(5)}>Best Sellers</button>
                        </li>
                    </ul>
                </div>
                <br></br>
                <div className='tab-content '>            
                    <div className={showtab===1 ? 'tab-pane fade show active' : "tab-pane fade"}>
                        <Veggies />
                        <Fruits/>
                        <Sherbs />
                 </div>
                 <div className={ showtab===2 ? 'tab-pane fade show active' : "tab-pane fade"}>
                    <Veggies />
                 </div>                 
                 <div className={ showtab===3 ? 'tab-pane fade show active' : "tab-pane fade"}>
                    <Fruits/>
                 </div>
                 <div className={ showtab===4 ? 'tab-pane fade show active' : "tab-pane fade"}>
                    <Sherbs/>
                </div>
                <div className={ showtab===5 ? 'tab-pane fade show active' : "tab-pane fade"}>
                    <BestSellers/>
                </div>
                 </div>
     
            </section>
        
        </div>
     )
}
export default Produce;