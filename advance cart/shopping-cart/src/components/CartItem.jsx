
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {remove} from '../redux/Slices/CartSlice';
import { toast} from "react-toastify";



const CartItem = ({item,itemIndex}) =>{
    const dispatch = useDispatch();

    const removeFromCart = () =>{
        dispatch(remove(item.id));
        toast.success("item remove")

    }
    return (
        <div>
            <div>
                <div>
                    <img src={item.image} alt="cart-product-item"/>
                </div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <div>
                    <p>{item.price}</p>
                    <div onClick={removeFromCart}>
                        <AiFillDelete/>

                    </div>
                </div>
            </div>

        </div>
    );
}



export default CartItem;