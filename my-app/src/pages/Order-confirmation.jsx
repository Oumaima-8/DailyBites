import {motion} from "framer-motion";


function OrderConfirmation(){


return(

<motion.div

initial={{
scale:.8,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

className="
min-h-screen
bg-[#F8F4ED]
flex
flex-col
items-center
justify-center
text-center
"


>


<div className="
text-6xl
">

✓

</div>


<h1 className="
font-title
text-2xl
mt-5
">

Bestelling ontvangen!

</h1>



<p className="
mt-3
">

Ordernummer:

<br/>

<strong>
#248
</strong>

</p>


<p className="
mt-5
text-[#2A2A2A]
">

Uw eten wordt aan tafel geserveerd.
<br/>

U hoeft niet naar de balie te komen.

</p>


</motion.div>


)

}


export default OrderConfirmation;