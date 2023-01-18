import React, {useState, useEffect } from 'react';
import { auth, db } from '../config/Config';
import {Col,Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Veggies() {
    
    // const {dispatch} = useContext(CartContext);
    const [loading, setLoading] = useState(true);
    const[veggies, setVeggies] = useState([]);
    // const [quantity, setQuantity] = useState(1);
    const history = useNavigate();
    let Product;

    // const decQuantity =() =>{
        
    //     if(quantity > 1) {
    //         setQuantity(prevCount => prevCount - 1);
    //     }
    // }

    // const incQuantity =() =>{
    //     setQuantity(prevCount => prevCount + 1);
    // } 
    
    function GetUserUid(){
        const [uid, setUid] = useState(null);
        useEffect(()=>{
            auth.onAuthStateChanged(user =>{
                if(user){
                    setUid(user.uid);
                }
            })
        }, [uid, setUid])
        return uid;
    }

    const uid = GetUserUid();

    const getVeggies = async ()=>{
        const veggies = await db.collection('Veggies').get();
        const veggiesArray = [];
        for (var snap of veggies.docs){
            var data =snap.data();
            data.ID = snap.id;
            veggiesArray.push({...data
            })
            if(veggiesArray.length === veggies.docs.length){
                setVeggies(veggiesArray); 
                setLoading(false);
            }
        }
    }

    useEffect(()=>{
        getVeggies();
    }, [])

    if (loading){
        return <p>loading firebase data...</p>;
    }

    const addToCart =(product) =>{
        if(uid !== null){
            console.log(uid);
            console.log(product);
            Product=product;
            Product.qty= document.getElementById('vegQty').value;
            Product['Subtotal']=Product.qty * Product.price;
            db.collection(`'Cart' + ${uid}`).doc(Product.id).set(Product)
            .then(()=>{
                console.log('successfully added to cart');
            })
            .catch((error)=>{
                console.error("Error writing document: ", error);
            });
        }
        else{
            history("/login");
        }
    }
    

        
    return(
        <section>
        
        <div className="productField container-fluid p-2">
            
            <div className="Vegetables">
            <center>
            <div>
            {veggies.map((val, index)=>{
                                
                return(
                    
                    <Row key={index} className="g-2 m-1 d-inline-flex justify-content-center">
                        
                        <Col>
                        {/* <Card img={val.img} alt={val.title} title={val.title} text={val.text} Price={val.price} key={val.id}/> */}
                        <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                            <div className="inner">
                                <img src={val.img} alt={val.title} className="card-img" style={{borderRadius: '1rem'}}/> 
                            </div>
                            
                            <div className="card-body text-center">   
                                <h5 className="card-title fw-bold text-center" name="item_name">{val.title}</h5>
                                <p className="card-text">{val.text}</p>
                                <p name="unit_price">₱{val.price}</p>
                            </div>
                            <div className="card-footer d-flex flex-column justify-content-between">
                                <div className="input-group mb-3 justify-content-center  mt-auto"  >
                                    <input className="text-center" type="number" id="vegQty" defaultValue={val.qty} min="1"></input>
                                    {/* <span className="input-group-text" onClick={() => decQuantity(val.qty)}>-</span>
                                    
                                    <div className="form-control text-center" id={quantity} defaultValue={quantity}>{quantity}</div>
                                    <span className="input-group-text" onClick={() => incQuantity(val.qty)}>+</span> */}
                                </div><br/>     
                                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onClick={() => addToCart(val)}><i className="bi bi-cart4" style={{fontSize:'20px'}} ></i> &nbsp;  Add to Cart</button>
                                {/* onClick={dispatch({type: 'Add', id: veggies.id, veggies })} */}
                            </div>            
                        </div>
                        </Col>
                    </Row>
                    )
            })}
            
            </div>
            </center>
        </div>
        </div>
        </section>
    )
}
export default Veggies;