import { useDispatch, useSelector } from "react-redux";
import {add} from "../redux/Slices/CartSlice";
import { toast } from "react-toastify";


const Product = ({post}) =>{

    const {cart} = useSelector((state)=>state);

    const dispatch = useDispatch();

    function addToCart() {
    dispatch(add(post));
    toast.success("Item added to cart");
}


     function removeFromCart () {
        dispatch(add(post.id));
        toast.success("item remove from cart");
    }

    return (
        
        <div>
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
               <img src= {post.image} alt="product pic"/>
        
            </div>
            <div>
            <p>{post.price}</p>
            </div>

            {
                cart.some((p)=>p.id=== post.id) ? (<button onClick={removeFromCart}>Remove Item</button>) :(<button onClick={addToCart}>Add to Cart</button>)
            }


        
            



        </div>
    );
}

export default Product;