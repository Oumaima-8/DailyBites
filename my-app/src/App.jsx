import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";


import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/Order-confirmation";
import {CartProvider} from "./context/CartContext";

function App(){


return(

    <CartProvider>
        <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route 
            path="/confirmation"
            element={<OrderConfirmation/>}
            />
        </Routes>
    </CartProvider>
    ); 

}

export default App;