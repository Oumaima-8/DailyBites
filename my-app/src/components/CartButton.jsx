import {motion} from "framer-motion";
import {ShoppingCart} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {useCart} from "../context/CartContext";


function CartButton(){

const navigate=useNavigate();
const {cart} = useCart();

const total = cart.reduce(

(sum,item)=>

sum + item.price * item.quantity

,0);


return(

<motion.div

onClick={()=>navigate("/cart")}

whileTap={{
scale:.95
}}

className="

fixed

bottom-3

left-1/2

-translate-x-1/2

w-[100%]

max-w-sm

bg-[#D97706]

text-white

rounded-xl

p-3

flex

justify-center

items-center

gap-3

"

>


<ShoppingCart/>

<span>
Bekijk bestelling € {total.toFixed(2)}
</span>





</motion.div>


)

}

export default CartButton;