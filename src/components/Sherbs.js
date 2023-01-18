import React, {useState, useEffect} from 'react';
import { auth, db } from '../config/Config';
import {Col,Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function SHerbs(){
    const [sherbs,setSherbs] = useState([]);
    const [loading, setLoading] = useState(true);
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


    const getSherbs = async ()=>{
        const sherbs = await db.collection('SHerbs').get();
        const sherbsArray = [];
        for (var snap of sherbs.docs){
            var data =snap.data();
            data.ID = snap.id;
            sherbsArray.push({...data
            })
            if(sherbsArray.length === sherbs.docs.length){
                setSherbs(sherbsArray); 
                setLoading(false);
            }
        }
    }

    useEffect(()=>{
        getSherbs();
    }, [])

    if (loading){
        return <p>loading firebase data...</p>;
    }

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
        <section>
        {/* <Produce/> */}
        <div className="productField container-fluid">
        {/* <!--Start of Spices Gallery--> */}
        <center>
        {sherbs.map((val, index)=>{
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
                        <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onClick={() => addToCart(val)}> <i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                        {/* onClick={dispatch({type: 'Add', id: fruits.id, fruits })} */}
                    </div>            
                </div>
                </Col>
            </Row>
            )
        })}
        
        </center> 
        </div>
        {/* <!--End of Spices Gallery--> */}
        </section>
    )
}
export default SHerbs;