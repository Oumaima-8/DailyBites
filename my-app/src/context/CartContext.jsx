import {
createContext,
useContext,
useState
} from "react";


const CartContext=createContext();



export function CartProvider({children}){


const [cart,setCart]=useState([]);



function addToCart(item){


setCart(prev=>{


const existing=
prev.find(
product=>product.id===item.id
);



if(existing){


return prev.map(product=>

product.id===item.id

?

{
...product,
quantity:product.quantity+1
}

:

product

)

}



return [

...prev,

{
...item,
quantity:1
}

]


})


}



function increase(id){


setCart(prev=>

prev.map(item=>

item.id===id

?

{
...item,
quantity:item.quantity+1
}

:item

)

)

}




function decrease(id){


setCart(prev=>

prev.map(item=>

item.id===id

?

{
...item,
quantity:item.quantity-1
}

:item

)

.filter(item=>item.quantity>0)

)


}



return(

<CartContext.Provider

value={{
cart,
addToCart,
increase,
decrease
}}

>

{children}

</CartContext.Provider>


)


}



export function useCart(){

return useContext(CartContext)

}