import {motion} from "framer-motion";
import {ShoppingCart} from "lucide-react";


function CartButton(){


return(

<motion.div

whileTap={{
scale:.95
}}

className="

fixed

bottom-3

left-1/2

-translate-x-1/2

w-[90%]

max-w-md

bg-[#D97706]

text-white

rounded-xl

p-3

flex

justify-between

items-center

"

>


<ShoppingCart/>

<span>
Bekijk bestelling
</span>


{/* <span>

</span> */}


</motion.div>


)

}

export default CartButton;