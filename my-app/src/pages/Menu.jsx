import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

import Header from "../components/Header";
import CategoryTabs from "../components/CategoryTabs";
import MenuItem from "../components/MenuItem";
import CartButton from "../components/CartButton";


function Menu(){

const [products, setProducts] = useState([]);
const [category,setCategory] = useState(null);
const [categoryName,setCategoryName] = useState(null);


useEffect(()=>{


async function fetchMenu(){


let query = supabase
.from("Menu Items")
.select("*")
.eq("available", true);



if(category){

query = query.eq(
"category_id",
category
);

}



const {data,error} = await query;



if(error){

console.log(error);

}

else{

setProducts(data);

}


}


fetchMenu();


}, [category]);



return(

<div className="
max-w-sm
mx-auto
bg-[#F8F4ED]
min-h-screen
relative
">


<Header/>


<CategoryTabs setCategory={setCategory} setCategoryName={setCategoryName}/>


<section className="p-3">


<h2 className="
font-title
text-xl
mb-3
">

{categoryName || "Menu"}

</h2>


{

products.map((item)=>(

<MenuItem

key={item.id}

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