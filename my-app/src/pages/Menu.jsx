import Header from "../components/Header";
import CategoryTabs from "../components/CategoryTabs";
import MenuItem from "../components/MenuItem";
import CartButton from "../components/CartButton";


const products=[

{
name:"Kapsalon Kalfsvlees",
description:"Friet met kalfsdöner, kaas en saus",
price:12.50
},


{
name:"Kapsalon Kipdöner",
description:"Friet met kipdöner en saus",
price:12.50
}


];


function Menu(){


return(

<div className="
max-w-sm
mx-auto
bg-[#F8F4ED]
min-h-screen
relative
">


<Header/>


<CategoryTabs/>



<section className="p-3">


<h2 className="
font-title
text-xl
mb-3
">

Kapsalon

</h2>


{
products.map((item)=>(

<MenuItem
key={item.name}
item={item}
/>


))

}


</section>



<CartButton/>


</div>

)

}


export default Menu;