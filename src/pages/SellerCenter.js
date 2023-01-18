import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth, db} from '../config/Config';

function SellerCenter(){

const [toggleState, setToggleState] = useState(1);
const toggleTab = (index) => {
    setToggleState(index);
  };

const [product_name, setProductName] = useState('');
const [unit_price, setUnitPrice] = useState('');
const [quantity, setQuantity] = useState('');
const [text, setText] = useState('');
const [category, setCategory] = useState('Choose category');
const [sellers, setSellers] = useState([]);
const [uid, setUid] = useState(null);
const [email, setEmail] = useState(null);



useEffect(() => {
    
    auth.onAuthStateChanged(user => {
        if (user) {
            setUid(user.uid);
            setEmail(user.email);

        }
    })
});
console.log(uid);  
console.log(email); 
// var Product;
const AddProduct = (e) => {
    e.preventDefault();
    db.collection(`SKU + ${uid}`).doc(uid).set({
        title: product_name,
        price: unit_price,
        stocks: quantity,
        text: text,
        category: category
    })
    .then(()=>{
        console.log("successfully added to seller's sku");
    })
    .catch((error)=>{
        console.error("Error writing document: ", error);
    });
    switch (category){
        case 'Veggies':
            var existing = db.collection('Veggies').where("title", "in", product_name).get();
            if (existing == null) {
                db.collection('Veggies').doc().set({
                price: unit_price,
                qty: 1,
                text: text,
                title: product_name
            });
            }
            break;
        case 'Fruits':
            db.collection('Fruits').doc().set({
                price: unit_price,
                qty: 1,
                text: text,
                title: product_name
            })
            break;
        case 'Sherbs':
            db.collection('SHerbs').doc().set({
                price: unit_price,
                qty: 1,
                text: text,
                title: product_name
            })
            break;
        case 'Pantry':
            db.collection('Pantry').doc().set({
                price: unit_price,
                qty: 1,
                text: text,
                title: product_name
            })
            break;
        case 'Ulam':
            db.collection('Ulam').doc().set({
                price: unit_price,
                qty: 1,
                text: text,
                title: product_name
            })
            break;
        default:
            alert('Please select a category');
    }

}

var sellerArray = [];

function getDetails (){
    auth.onAuthStateChanged(user =>{
    if(user){
        db.collection('Sellers').onSnapshot(snapshot=>{
            sellerArray = snapshot.docs.map((doc)=>({
                // ID: doc.id,
                ...doc.data(),
                
            }));
            
        });
            console.log(sellerArray);
            
        }
        setSellers(sellerArray);
        
    })
 }


useEffect(() => {
    getDetails();
},[]);

console.log(sellers);
console.log(email);
function Current (){
    for ( var i=0; i<(sellers.length); i++) {
        if(sellers[i].email !== email){
            
        }
        else {
            console.log(sellers[i].email);
            var current = sellers[i];
        }
        
    }
    return current;
}

const details = Current();
// console.log(details.fName);
// var firstName = details.fName;
// var middleName = details.middle;
// var lastName = details.lName;
// var phone = details.phone;


//Update seller info
function UpdateInfo(){
    var newPhone = document.getElementById("phoneNum").value;
    let Info = details;
    console.log(Info);
    Info.phone = newPhone;
    console.log(Info.phone);
    console.log(uid);
    db.collection('Sellers').doc(uid).set({
        email: Info.email,
        fName: Info.fName,
        lName: Info.lName,
        middle: Info.middle,
        password: Info.password,
        storeName: Info.storeName,
        phone: Info.phone}, {merge: true});
    // var updatePhone = db.collection('Sellers').doc(uid).get();
    // updatePhone.then(function(querySnapshot){
    //     querySnapshot.forEach(function(doc){
    //         doc.ref.update(Info);
    //     })
    // })
}

    return (
        <div className="container mt-5">
            <h1>Seller Center</h1>

            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        {/* use toggleState on nav-link to toggle the tabs on click */}
                        <Link className={toggleState === 1 ? "nav-link active" : "nav-link"} data-bs-toggle="tab" aria-current="page" to="..." onClick={() => toggleTab(1)}>My Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={toggleState === 2 ? "nav-link active" : "nav-link"} data-bs-toggle="tab" to="..." onClick={() => toggleTab(2)}>My Items</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={toggleState === 3 ? "nav-link active" : "nav-link"} data-bs-toggle="tab" to="..." onClick={() => toggleTab(3)}>Messages</Link>
                    </li>
                </ul>

                <div className="tab-content">
                    {/* use toggleState on tab-pane to toggle the tab-panes on click */}
                    <div className={toggleState === 1 ? "tab-pane active" : "tab-pane"} id="Profile">
                        <div className="row border g-0 shadow-sm">
                            <h3 className="mb-3">My Profile</h3>
                                <div className="col-3 d-block">
                                
                                </div>
                                <div className="col-9 p-4">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="fName">First Name:</span>
                                        <input type="text" className="form-control"  id="firstName" disabled/> 
                                        {/* defaultValue={firstName} */}
                                        <span className="input-group-text" id="mName">Middle Initial:</span>
                                        <input type="text" className="form-control"  id="middleName" disabled/> 
                                        {/* defaultValue={middleName} */}
                                        <span className="input-group-text" id="lName">Last Name:</span>
                                        <input type="text" className="form-control" id="lastName"  disabled/>
                                        {/* defaultValue={lastName}  */}
                                    </div><br/>
                                    <div className="input-group mb-3">
                                        <label htmlFor="phoneNum" className="input-group-text">Cellphone number:</label>
                                        <input type="tel" className="form-control" id="phoneNum" placeholder="09XXXXXXXXX"  maxLength="11" minLength="11" />
                                        {/* defaultValue={phone} */}
                                    </div><br/>
                                    <button type="submit" className="btn btn-info text-capitalize btn-sm" onClick={UpdateInfo}>Save Changes</button>
                                </div>     
                                         
                        </div>
                    </div>
                    
                    <div className={toggleState === 2 ? "tab-pane active" : "tab-pane"} id="Items">
                        <div className="row border g-0 shadow-sm">
                        <h1>Product List</h1>
                        <form onSubmit={AddProduct}>
                        <div className="input-group mb-3">
                            <select id="Category" onChange ={(e) => setCategory(e.target.value)}>
                                <option value="Choose">Choose Category</option>
                                <option value="Veggies">Vegetables</option>
                                <option value="Fruits">Fruits</option>
                                <option value="Ulam">Ulam</option>
                                <option value="Sherbs">Spices and Herbs</option>
                                <option value="Pantry">Pantry</option>
                            </select>
                            <span className="input-group-text">Product Name</span>
                            <input type="text" className="form-control" name="product_name" value={product_name} onChange = {(e) => setProductName(e.target.value)}/>
                        </div>
                        <div className="input-group mb-3 justify-content-center">
                            
                            <input type="text" className="form-control" placeholder="per how many g/pc/kg?" value={text} onChange = {(e) => setText(e.target.value)}/>
                            <span className="input-group-text">Unit Price</span>
                            <input type="number" name="unit_price" placeholder="Unit price" value={unit_price} onChange = {(e) => setUnitPrice(e.target.value)}/>
                            <span className="input-group-text">Stocks</span>
                            <input type="number" name="quantity" value={quantity} onChange = {(e) => setQuantity(e.target.value)}/>
                            {/* <input type="file" name="product_img" value={product_img} accept="image/*" onChange = {(e) => setProductImage(e.target.value)}/> */}
                        </div>
                            <button type="submit" className="btn btn-info text-capitalize btn-sm" onClick={AddProduct}>Add Product</button>
                        
                        </form>
                        <table>
                            <thead>
                                <tr>
                                    <th> Product Name</th>
                                    <th> Unit Price</th>
                                    <th> Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* {products.map((val) =>{
                                return(
                                <tr key={val.product_id}>
                                    <td><input type="text" defaultValue={val.product_name} id={'product_name'+val.product_id}/></td>
                                    <td><input type="number" defaultValue={val.unit_price} id={'unit_price'+val.product_id}/></td>
                                    <td><input type="number" defaultValue={val.quantity} id={'quantity'+val.product_id}/></td>
                                    <td><img src={val.product_img} alt={product_img} id={'product_img'+val.product_id}/></td>
                                    <td><button id={val.product_id} >Delete</button></td>    */}
                                    {/* onClick={deleteProduct}                                */}
                                    {/* <td><button title={val.product_id} >Update</button></td> */}
                                    {/* onClick={updateBtn} */}
{/* 
                                </tr>
                                )
                            })} */}
                                
                            </tbody>  

                        </table>
                        </div>
                    </div>

                    <div className={toggleState === 3 ? "tab-pane active" : "tab-pane"} id="Messages">
                        <div className="row border g-0 shadow-sm">
                            <div className="col p-4">
                                <h3 className="mb-3">Messages</h3>
                                <p>Thank you for patronizing our platform.</p>
                                <p>It's a pleasure to serve you.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SellerCenter;