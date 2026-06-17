import {motion} from "framer-motion";
import {useState} from "react";


const categories=[
"Populair",
"Kapsalon",
"Dürüm",
"Burgers",
"Loaded Fries"
];


function CategoryTabs(){


const [active,setActive]=useState("Populair");


return(

<div className="
flex
gap-3
overflow-x-auto
px-4
py-3
bg-[#F8F4ED]
">


{
categories.map(cat=>(


<button

onClick={()=>setActive(cat)}

className="
relative
px-5
py-2
rounded-full
bg-white
text-sm
"

>


{active===cat &&

<motion.div

layoutId="activeCategory"

className="
absolute
inset-0
bg-[#D97706]
rounded-full
"

/>

}


<span className="
relative
z-10
">

{cat}

</span>


</button>


))

}


</div>


)

}

export default CategoryTabs;