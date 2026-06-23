import {useNavigate} from "react-router-dom";
import {useCart} from "../context/CartContext";
import BackButton from "../components/BackButton";

function Checkout(){

const navigate = useNavigate();
const {cart} = useCart();

const total = cart.reduce(
(sum,item)=>
sum + item.price * item.quantity
,0);


return(

<div className="
max-w-sm
mx-auto
bg-[#F8F4ED]
min-h-screen
p-4
">
<BackButton/>

<h1 className="font-title text-xl">

Controleer bestelling

</h1>


<div className="
bg-[#9FAFB3]
p-4
mt-5
">

Dürüm Kip Menu


<br/>

Aantal: 2


</div>

<div

className="
fixed
bottom-5
left-1/2
-translate-x-1/2
w-[80%]
max-w-sm
"

>


<button

onClick={()=>navigate("/confirmation")}

className="

bg-[#D97706]
text-white
w-full
p-3
rounded-xl
flex
justify-center
items-center

"

>

Bestelling plaatsen € {total.toFixed(2)}

</button>

</div>


</div>


)

}


export default Checkout;