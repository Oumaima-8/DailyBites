import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";


import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/Order-confirmation";


function App(){


return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Menu/>}/>

<Route path="/cart" element={<Cart/>}/>

<Route path="/checkout" element={<Checkout/>}/>

<Route 
path="/confirmation"
element={<OrderConfirmation/>}
/>


</Routes>


</BrowserRouter>

)

}


export default App;