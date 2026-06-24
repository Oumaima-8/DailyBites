import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {supabase} from "../supabaseClient";


function CategoryTabs({setCategory, setCategoryName}){


const [categories,setCategories] = useState([]);

const [active,setActive] = useState(null);



useEffect(()=>{


async function fetchCategories(){


const {data,error} = await supabase
.from("Categories")
.select("*")
.order('sort_order', {ascending:true});


if(error){

console.log(error);

}

else{

setCategories(data);

if(data.length > 0){

setActive(data[0].id);

setCategory(data[0].id);

setCategoryName(data[0].name);

}

}


}


fetchCategories();


},[]);



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

key={cat.id}


onClick={()=>{

setActive(cat.id);

setCategory(cat.id);

setCategoryName(cat.name);

}}


className="
relative
px-5
py-2
rounded-full
bg-white
text-sm
"

>



{
active === cat.id &&

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

{cat.name}

</span>



</button>


))

}



</div>


)

}


export default CategoryTabs;