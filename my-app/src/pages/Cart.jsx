import {motion} from "framer-motion";


function Cart(){


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
max-w-md
mx-auto
bg-[#F8F4ED]
min-h-screen
p-4
"

>


<h1 className="
font-title
text-xl
">

Bestelling

</h1>



<div className="
bg-[#9FAFB3]
p-3
mt-5
rounded
">


<h3>
Dürüm Kip Menu
</h3>


<p>
Groente:
sla, tomaat
</p>


<p>
Saus:
knoflook, sambal
</p>


<div className="
flex
justify-between
mt-3
">


<button>
-
</button>


<span>
1
</span>


<button>
+
</button>


</div>


<button className="
mt-3
underline
">

Aanpassen

</button>


</div>



<button className="
bg-[#D97706]
text-white
w-full
p-3
rounded-xl
mt-5
">

Checkout €15,00

</button>



</motion.div>


)

}


export default Cart;