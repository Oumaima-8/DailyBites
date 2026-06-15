import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";

function App() {
  const [activeCategory, setActiveCategory] = useState("Snacks");
  const [cart, setCart] = useState(2);

  const categories = [
    "Snacks",
    "Drinks",
    "Sweets",
    "Deals"
  ];

  const menuItems = [
    {
      id: 1,
      name: "Nachos & Dip",
      description: "Crispy nachos with salsa & guac",
      price: "€4.50",
      popular: true
    },
    {
      id: 2,
      name: "Garlic Bread",
      description: "Toasted with herb butter",
      price: "€3.00"
    },
    {
      id: 3,
      name: "Mini Wraps (x3)",
      description: "Chicken, lettuce, mild sauce",
      price: "€5.50"
    }
  ];


  function addToCart() {
    setCart(cart + 1);
  }


  return (
    <div className="app">

      {/* Header */}
      <header className="header">

        <h1>
          Daily Bites
        </h1>


        <motion.button
          className="cart"
          animate={{ scale: cart ? [1, 1.15, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          🛒 {cart}
        </motion.button>

      </header>



      {/* Categories */}
      <div className="categories">

        {categories.map((category) => (

          <motion.button
            key={category}
            className={
              activeCategory === category
              ? "category active"
              : "category"
            }

            onClick={() => setActiveCategory(category)}

            whileTap={{
              scale: 0.9
            }}

          >

            {category}

          </motion.button>

        ))}

      </div>



      {/* Menu */}
      <main>

        <h2>
          {activeCategory}
        </h2>


        <div className="menu">

        {
          menuItems.map((item,index)=>(

            <motion.div
              className="item"

              key={item.id}

              initial={{
                opacity:0,
                y:20
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:index * 0.1
              }}

            >


              <div className="image-placeholder">
                
              </div>



              <div className="info">

                {
                  item.popular && (

                    <span className="popular">
                      Popular
                    </span>

                  )
                }


                <h3>
                  {item.name}
                </h3>


                <p>
                  {item.description}
                </p>


                <strong>
                  {item.price}
                </strong>


              </div>



              <motion.button

                className="add"

                onClick={addToCart}

                whileTap={{
                  scale:0.85
                }}

              >

                +

              </motion.button>


            </motion.div>


          ))
        }


        </div>


      </main>

    </div>
  );
}


export default App;