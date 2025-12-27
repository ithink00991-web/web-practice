import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";


const Cart = () =>{

    const {cart} = useSelector((state) => state);
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr) => acc+curr.price,0));

    },[cart])
    return (
        <div>
            {
                cart.length > 0 ? (<div>
                    <div>
                        {
                            cart.map ((item,index)=>{
                                return (<CartItem key={item.id} item={item} itemIndex={index}/>)
                            })
                        }
                    </div>
                    <div>
                        <div>
                            <div>your cart</div>
                            <div>summary</div>
                            <p><span>total item :{cart.length}</span></p>

                        </div>
                        <div>
                            <p>total amount:${totalAmount}</p>
                            <button>Checkout NOw</button>
                        </div>


                    </div>



                </div>):
                
                
                
                
                (<div><p>Cart is empty</p>
                    <Link to={"/"}><button>Shop Now</button></Link> </div>)
            }

            

        </div>
    );
}

export default Cart;