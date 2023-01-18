import React, {useState, useEffect} from 'react'
import {Col,Row} from 'react-bootstrap';
import { auth, db } from '../config/Config';
import { useNavigate } from 'react-router-dom';


function BestSellers(){
    const history = useNavigate();
    let Product;

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

    const [ulam,setUlam] = useState([]);

    useEffect(() => {
        const getUlamFromFirebase = [];
        // db.collection('Veggies').onSnapshot((querySnapshot) =>{
        db.collection('Ulam').orderBy('title').get().then((querySnapshot) =>{
            querySnapshot.forEach((doc) =>{
                getUlamFromFirebase.push({...doc.data(), key: doc.id});
            });
            setUlam(getUlamFromFirebase);
            
        });
    }, [ulam]);

    const [basket,setBasket] = useState([]);

    useEffect(() => {
        const getbasketFromFirebase = [];
        
        db.collection('Fruitbasket').orderBy('price').get().then((querySnapshot) =>{
            querySnapshot.forEach((doc) =>{
                getbasketFromFirebase.push({...doc.data(), key: doc.id});
            });
            setBasket(getbasketFromFirebase);
            
        });
    }, [basket]);

    const [salad,setSalad] = useState([]);

    useEffect(() => {
        const getSaladFromFirebase = [];
        // db.collection('Veggies').onSnapshot((querySnapshot) =>{
        db.collection('SaladSet').orderBy('title').get().then((querySnapshot) =>{
            querySnapshot.forEach((doc) =>{
                getSaladFromFirebase.push({...doc.data(), key: doc.id});
            });
            setSalad(getSaladFromFirebase);
        });
    }, [salad]);

    const [pantry,setPantry] = useState([]);

    useEffect(() => {
        const getPantryFromFirebase = [];
        // db.collection('Veggies').onSnapshot((querySnapshot) =>{
        db.collection('Pantry').orderBy('title').get().then((querySnapshot) =>{
            querySnapshot.forEach((doc) =>{
                getPantryFromFirebase.push({...doc.data(), key: doc.id});
            });
            setPantry(getPantryFromFirebase);
        });
    }, [pantry]);

    const addToCart =(product) =>{
        if(uid !== null){
            console.log(uid);
            console.log(product);
            Product=product;
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
        <div>
        {/* <Produce/> */}
        {/* <!--Nav Tabs--> */}
        <div className="container-fluid mt-2">
            <ul className="nav nav-tabs nav-justified flex-column flex-sm-row">
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" aria-current="page" href="#UlamBundles">Ulam Bundles</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#FruitsBasket">Fruits Basket</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#SaladSet">Salad Set</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#Pantry">Pantry Essentials</a>
                </li>
            </ul>
            <div className="tab-content">
                {/* <!--Ulam Bundles Tab--> */}
                <div className="tab-pane active" id="UlamBundles">
                    <h3 className="mb-3 text-center">Ulam Bundles</h3>
                    <p className="text-center">The Ulam Bundle has all the fresh vegetables, leafy greens and rekados (ginger, tomato, onion, garlic) you need for one ulam, to serve your family or friends. Sulit and convenient.</p>
                    <p className="fst-italic text-center">*meats not included</p>
                    <center>
                    {ulam.map((val, index)=>{
                        return(
                            <Row key={index} className="g-2 m-1 d-inline-flex justify-content-center">
                        
                            <Col>
                            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                                <div className="inner">
                                    <img src={val.img} alt={val.title} className="card-img" style={{borderRadius: '1rem'}}/> 
                                </div>
                                
                                <div className="card-body text-center">   
                                    <h5 className="card-title fw-bold text-center" name="item_name">{val.title}</h5>
                                    {/* <p className="card-text">{val.text}</p> */}
                                    <p name="unit_price">₱{val.price}</p>
                                </div>
                                <div className="card-footer d-flex flex-column justify-content-between">
                                    <div className="input-group mb-3 align-center  mt-auto"  >
                                        {/* <span className="input-group-text" onClick={() => decQuantity(val.qty)}>-</span> */}
                                        <div className="form-control text-center" name="quantity" defaultValue={val.qty}>{val.qty}</div>
                                        {/* ?<span className="input-group-text" onClick={() => incQuantity(val.qty)}>+</span> */}
                                    </div><br/>     
                                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}  onClick={() => addToCart(val)}><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                                    {/* onClick={dispatch({type: 'Add', id: fruits.id, fruits })} */}
                                </div>            
                            </div>
                            </Col>
                        </Row>
                        )
                    })}
                    </center>
                    <br/>
                </div>

        {/* <!--Start of Fruits Basket Tab--> */}
        <div className="tab-pane" id="FruitsBasket">
            <h3 className="mb-3 text-center">Fruits Basket</h3>
            <center>
                    {basket.map((val, index)=>{
                        return(
                            <Row key={index} className="g-2 m-1 d-inline-flex justify-content-center">
                        
                            <Col>
                            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                                <div className="inner">
                                    <img src={val.img} alt={val.title} className="card-img" style={{borderRadius: '1rem'}}/> 
                                </div>
                                
                                <div className="card-body text-center">   
                                    <h5 className="card-title fw-bold text-center" name="item_name">{val.title}</h5>
                                    {/* <p className="card-text">{val.text}</p> */}
                                    <p name="unit_price">₱{val.price}</p>
                                </div>
                                <div className="card-footer d-flex flex-column justify-content-between">
                                    <div className="input-group mb-3 align-center  mt-auto"  >
                                        {/* <span className="input-group-text" onClick={() => decQuantity(val.qty)}>-</span> */}
                                        <div className="form-control text-center" name="quantity" defaultValue={val.qty}>{val.qty}</div>
                                        {/* ?<span className="input-group-text" onClick={() => incQuantity(val.qty)}>+</span> */}
                                    </div><br/>     
                                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}  onClick={() => addToCart(val)}><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                                    {/* onClick={dispatch({type: 'Add', id: fruits.id, fruits })} */}
                                </div>            
                            </div>
                            </Col>
                        </Row>
                        )
                    })}
                    </center>
                        
        </div>
                {/* <!--End of Fruits Tab-->     */}
                
                {/* <!--Salad Set Tab--> */}
                <div className="tab-pane" id="SaladSet">
                    <div className="row g-0 m-1 d-flex justify-content-center">
                        <h3 className="mb-3 text-center">Salad Set</h3>
                        <center>
                        {salad.map((val, index)=>{
                            return(
                                <Row key={index} className="g-2 m-1 d-inline-flex justify-content-center">
                        
                                <Col>
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
                                        <div className="input-group mb-3 align-center  mt-auto"  >
                                            {/* <span className="input-group-text" onClick={() => decQuantity(val.qty)}>-</span> */}
                                            <div className="form-control text-center" name="quantity" defaultValue={val.qty}>{val.qty}</div>
                                            {/* ?<span className="input-group-text" onClick={() => incQuantity(val.qty)}>+</span> */}
                                        </div><br/>     
                                        <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onClick={() => addToCart(val)}><i className="bi bi-cart4" style={{fontSize:'20px'}} ></i> &nbsp;  Add to Cart</button>
                                        {/* onClick={dispatch({type: 'Add', id: fruits.id, fruits })} */}
                                    </div>            
                                </div>
                                </Col>
                            </Row>
                            )
                        })}
                        </center>
                    </div>
                </div>

                {/* <!--Start of Pantry Essentials--> */}
                <div className="tab-pane" id="Pantry">
                    <div className="row p-1  text-center">
                        <h3 className="mb-3">Pantry Essentials</h3>
                        <p>If you're looking for a gift to your loved ones who love to cook, it's the perfect gift set. You can also have it for your own pantry.</p>
                    </div>
                    <center>
                    {pantry.map((val, index)=>{
                        return(
                            <Row key={index} className="g-2 m-1 d-inline-flex justify-content-center">
                        
                                <Col>
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
                                        <div className="input-group mb-3 align-center  mt-auto"  >
                                            {/* <span className="input-group-text" onClick={() => decQuantity(val.qty)}>-</span> */}
                                            <div className="form-control text-center" name="quantity" defaultValue={val.qty}>{val.qty}</div>
                                            {/* ?<span className="input-group-text" onClick={() => incQuantity(val.qty)}>+</span> */}
                                        </div><br/>     
                                        <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onClick={() => addToCart(val)}><i className="bi bi-cart4" style={{fontSize:'20px'}} ></i> &nbsp;  Add to Cart</button>
                                        {/* onClick={dispatch({type: 'Add', id: fruits.id, fruits })} */}
                                    </div>            
                                </div>
                                </Col>
                            </Row>
                        )
                    })}               
                    
                    </center>
                </div>
            </div>
        <br/>
        {/* <!--End of Nav tabs--> */}
        </div>
    </div>
    )
}
export default BestSellers;