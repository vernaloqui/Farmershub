import {useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import { auth, db } from '../config/Config';
import ulam from '../img/Ulam.png'
// import fruit from '../img/fruitBasket.jpg';
import salad from '../img/salad.jpg';
import pantry from '../img/pantry.png';
import { Link, useNavigate } from 'react-router-dom';
import "./check.css";



function Cart(){
    

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
    const navigate = useNavigate();
    const [cartItems, setCartItems] =useState([]);

    useEffect(() =>{
        
        auth.onAuthStateChanged(user =>{
            if(user){
                db.collection(`'Cart' + ${uid}`).onSnapshot(snapshot=>{
                    const newCartProduct = snapshot.docs.map((doc)=>({
                        // ID: doc.id,
                        ...doc.data(),
                    }));
                    setCartItems(newCartProduct);
                })
            }
            else{
                console.log('user is not signed in to retrieve cart');
            }
        })
    }, [uid])
    
//computes the total price of the cart items
    var totalPrice;
    const UpdateTotal = () =>{
        const subtotals = cartItems.map(cartItem=>{
            return cartItem.Subtotal;
        })
        console.log(subtotals);
        totalPrice = subtotals.reduce((partialSum, a) => partialSum + a, 0);
        console.log(totalPrice); 
        
    }
    console.log(cartItems);
    UpdateTotal();
    let Item;

    const Update =(item)=>{
        Item = item;
        Item.qty = document.getElementById(item.title).value;
        console.log(Item.id);
        console.log(Item.qty);
        Item.Subtotal = Item.qty * Item.price;
        document.getElementById('subtotal'+item.title).value = Item.Subtotal;
        //update db
        auth.onAuthStateChanged(user =>{
            if(user){
                var itemUpdate = db.collection(`'Cart' + ${uid}`).where("title", "==", item.title).get();
                
                itemUpdate.then(function(querySnapshot){
                    querySnapshot.forEach(function(doc) {
                        doc.ref.update(Item);
                        
                    });
                    console.log("Entire Document has been deleted successfully.");
                // db.collection(`'Cart' + ${uid}`).doc(item.uid).set(Item, {merge:true}).then(() =>{
                //     console.log('increment added successfully');
                // }) 
            })
            UpdateTotal();
        }
            else{
                console.log('user is not logged in to change quantity');
            }
        })
    }

    
    const RemoveItem = (item) => {
        console.log(item.title);
        Item = item;
        Item.qty = document.getElementById(item.title).value;
        console.log(Item.id);
        console.log(Item.qty);
        Item.Subtotal = Item.qty * Item.price;
        document.getElementById('subtotal'+item.title).value = Item.Subtotal;


        var itemRemove = db.collection(`'Cart' + ${uid}`).where("title", "==", item.title).get();
        console.log(itemRemove);
        itemRemove.then(function(querySnapshot){
            querySnapshot.forEach(function(doc) {
                doc.ref.delete();
                
            });
            console.log("Entire Document has been deleted successfully.");
        });
        UpdateTotal();
    }
    
    const CheckOut = () =>{
        
        db.collection(`Buyer + ${uid}`).add({cartItems}).catch((error)=>{
            console.log("Error adding documents: " + error);
        }) ;
        var itemRemove = db.collection(`'Cart' + ${uid}`).get();
        itemRemove.then(function(querySnapshot){
            querySnapshot.forEach(function(doc) {
                doc.ref.delete();
                
            });
            console.log("Entire Document has been deleted successfully.");
        }); 
        alert("Your order has been successfully placed.")
        navigate('/')
    }

    return (
    <div className="container-fluid" style={{backgroundColor: '#F8FEFA'}}>
        {/* <!--Start of Shopping Cart section--> */}
        <p className="display-6 text-center text-uppercase" style={{color: '#073418', backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>Shopping Cart</p>
        <div className="container-fluid" id="cartBox">
            <table className="table table-hover table-striped" id="cartContents">
                <thead>
                    
                    <tr>
                        <th scope="col" >Image</th>
                        <th scope="col" >Product</th>
                        <th scope="col" >Price</th>
                        <th scope="col" className="text-center">Quantity</th>
                        <th scope="col" >Subtotal</th>
                        <th scope="col" className="text-center"></th>
                    </tr>
                    
                </thead>
                <tbody>
                {/* Show the list of products if cart is not empty */}
                {cartItems.length > 0 && (
                    cartItems.map((val, index) =>{
                        return(
                            <tr key={index}>
                                <td><img src={val.img} alt='..' style={{width:'100px', height:'50px'}}className="align-self-center"/></td>
                                <td><span id={'item_name'+val.id}/>{val.title}</td>
                                <td><span id={'unit_price'+val.id}/>₱{(val.price).toFixed(2)}</td>
                                <td>
                                    <div className="input-group mb-3 align-center  mt-auto"  >
                                       
                                        <input className="text-center" type="number" id={val.title} defaultValue={val.qty} min="1"></input>
                                    </div>
                                </td>
                                <td><input type="number" id={'subtotal'+val.title} className="align-self-center text-center" defaultValue={val.Subtotal} disabled/></td>
                                <td><button className="btn shadow" style={{backgroundColor: '#A2DBB7'}} id={val.id} onClick={()=>Update(val)}>Update</button></td>
                                <td><button className="btn btn-danger" id={val.id} onClick={()=>RemoveItem(val)}>Remove</button></td>                  
                            </tr>
                        )
                    })
                )}

                {cartItems.length <1 && (
                    <tr>
                        <td>
                            <p className="text-center fw-bold bg-warning">Your cart is empty! Add some items to checkout.</p>
                        </td>
                    </tr>
                )}
                </tbody>  
            </table>
                    
            
            
            </div>
            <hr/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col ms-3">                
                        <label>Special Instructions to the Seller:</label><br/>
                        <textarea className="border shadow-sm p-1" rows="5" cols="45" style={{resize:'none'}}></textarea>
                    </div>
                    <div className="col">
                        <br/>
                        {/* <!--Summary table--> */}
                        <table className="table table-bordered table-hover table-striped" id="cartContents">
                            <thead>
                                <tr className="text-center">
                                    <th colSpan="2">Cart Totals</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        Total
                                    </th>
                                    <th id="totalPrice">₱{totalPrice.toFixed(2)}</th>
                                </tr>
                                    <tr className="text-end">
                                    <td colSpan="2">
                                        <button className="btn shadow" style={{backgroundColor: '#A2DBB7'}} onClick={CheckOut}>Checkout via Cash on Delivery</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div><br/>
            <div className="container-fluid"></div>    
            <br/>
            <br/>
            <br/>
            {/* <!--Item Suggestions--> */}
            <div className="container d-sm-block text-center">
                <p className="h4" style={{background: 'rgba(0, 0, 0, 0.1)'}}>Items you might like</p>
                <Row className="g-2 m-1 d-inline-flex justify-content-center">
                    <Col>
                    <div className="col-12 col-lg-3 col-md-3 card p-0 h-100 overflow-auto" style={{color:'#073418'}}> 
                            <img src={ulam} alt="ulam" className="card-img img-thumbnail"/>                       
                            <div className="card-body d-flex flex-column" style={{background: 'rgba(0, 0, 0, 0.1)'}}>                  
                                <h5 className="card-title">Ulam Bundles</h5>
                                <Link to="/best" className="btn mt-auto" style={{backgroundColor:'#A2DBB7'}}>Shop Now</Link>
                            </div>
                    </div>
                    </Col>
                    <Col>
                    <div className="col-12 col-lg-3 col-md-3 card p-0 h-100 overflow-auto" style={{color:'#073418'}}> 
                            <img src={salad} alt="salad" className="card-img img-thumbnail"/>                       
                            <div className="card-body d-flex flex-column" style={{background: 'rgba(0, 0, 0, 0.1)'}}>                   
                                <h5 className="card-title">Salad Set</h5>
                                <Link to="/best" className="btn mt-auto" style={{backgroundColor:'#A2DBB7'}}>Shop Now</Link>
                            </div>
                    </div>
                    </Col>
                    <Col>
                    <div className="col-12 col-lg-3 col-md-3 card p-0 h-100 overflow-auto" style={{color:'#073418'}}> 
                            <img src={pantry} alt="pantry" className="card-img img-thumbnail"/>                       
                            <div className="card-body d-flex flex-column" style={{background: 'rgba(0, 0, 0, 0.1)'}}>                 
                                <h5 className="card-title">Pantry Essentials</h5>
                                <Link to="/best" className="btn mt-auto" style={{backgroundColor:'#A2DBB7'}}>Shop Now</Link>
                            </div>
                    </div>
                    </Col>
                </Row>
                </div>
            
        <br/>

        {/* <!--Modal--> */}
        <div className="modal fade" id="confirmCO" tabIndex="-1">
            <div className="modal-dialog"> 
            {/* <!--dialog box--> */}
                <div className="modal-content">
                {/* <!--start of modal header--> */}
                <div className="modal-header">
                    <h5 className="modal-title text-center" id="modalTitle">
                        Confirm Check-out via COD</h5>
                        <button className="btn-close" 
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="close">
                        </button>  
                        {/* <!--X button sa dialog box--> */}
                </div>
                {/* <!--End of modal header--> */}

                {/* <!--start of modal body--> */}
                <div className="modal-body">
                    <p >Total amount to pay via delivery is <strong>₱</strong></p>
                    <br/>
                    
                    <a href="CheckOut.html" className="text-end m-auto p-3"><button className="btn"
                            style={{backgroundColor: '#A2DBB7', borderRadius: '5px', boxShadow: '5px 5px grey'}}>
                            Proceed
                    </button></a>
                </div>
                {/* <!--End of modal body--> */}
                </div>
            </div>
        </div>
        </div>
            )
        }
    export default Cart;