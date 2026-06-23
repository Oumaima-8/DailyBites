import {motion} from "framer-motion";
import {useCart} from "../context/CartContext";
import {useNavigate} from "react-router-dom";
import BackButton from "../components/BackButton";



function Cart(){


const {
cart,
increase,
decrease
}=useCart();


const navigate=useNavigate();



const total = cart.reduce(

(sum,item)=>

sum + item.price * item.quantity

,0);



return(


<motion.div

initial={{
x:50,
opacity:0
}}

animate={{
x:0,
opacity:1
}}


className="
max-w-sm
mx-auto
bg-[#F8F4ED]
min-h-screen
p-4
"

>
<BackButton/>

<h1 className="
font-title
text-xl
">

Bestelling

</h1>



{


cart.length === 0 ?


<p className="mt-5">

Je bestelling is leeg

</p>



:


cart.map(item=>(


<div

key={item.id}

className="
bg-[#9FAFB3]
p-3
mt-5
rounded
"


>


<h3>

{item.name}

</h3>



<p>

{item.description}

</p>



<p>

€{item.price}

</p>



<div className="
flex
justify-between
mt-3
">


<button

onClick={()=>decrease(item.id)}

>

-

</button>



<span>

{item.quantity}

</span>



<button

onClick={()=>increase(item.id)}

>

+

</button>


</div>



</div>


))


}





<button

disabled={cart.length === 0}

onClick={()=>navigate("/checkout")}


className={`
bg-[#D97706]
text-white
w-full
p-3
rounded-xl
mt-5


${
cart.length === 0

?

"bg-gray-300"

:

"bg-[#D97706]"
} `}


>

Checkout €{total.toFixed(2)}

</button>



</motion.div>


)

}


export default Cart;