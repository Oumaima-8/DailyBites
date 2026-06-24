import {motion} from "framer-motion";
import {useCart} from "../context/CartContext";


function MenuItem({item}){

const {addToCart} = useCart();

return(

<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}


className="

bg-[#9FAFB3]

p-3
flex
justify-between

"


>


<div>

<h3 className="
font-bold
">

{item.name}

</h3>


<p className="
text-xs
text-[#2A2A2A]
">

{item.description}

</p>


<strong>

€{Number(item.price).toFixed(2)}
</strong>


</div>



<motion.button

onClick={()=>addToCart(item)}

whileTap={{
scale:.9
}}

className="
bg-white
rounded-full
w-6
h-6
text-[#D97706]
font-bold
"

>

+

</motion.button>


</motion.div>

)

}

export default MenuItem;