import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import {useDispatch,useSelector} from 'react-redux'
import { coffeeDetails } from "../CoffeSlice";
import { addCart,increaseQuantity,decreaseQuantity } from "../CartSlice";

const Posts = () => {
  // const [posts, setPosts] = useState([]);
  // const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const dispatch=useDispatch();
  const output=useSelector(state=>state.reducer.coffeeReducer.data);
  const coffeeDataAvailable = output && output.length > 0;
  const cart=useSelector(state=>state.reducer.cartReducer.cart)
  const showCart = () => {
    setIsCartVisible(!isCartVisible);
  };
 
  // const addToCart = (post) => {
  //   // dispatch(addCart(post))
  //   const cartItem = cart.find((item) => item.id === post.id);
  //   if (!cartItem) {
  //     const newPost = {
  //       id: post.id,
  //       title: post.title,
  //       ingredients: post.ingredients,
  //       image: post.image,
  //       description: post.description,
  //       quantity: 1,
  //     };
  //     // setCart([...cart, newPost]);
  //     dispatch(addCart(newPost))
  //   } else {
  //     const updatedCart = cart.map((item) => {
  //       if (item.id === post.id) {
  //         return {
  //           ...item,
  //           quantity: item.quantity + 1,
  //         };
  //       }
  //       return item;
  //     }
     
  //     );
  //     dispatch(addCart(updatedCart))
  //     // setCart(updatedCart);
     
  //   }
  //   console.log(cart);
  // };
  const addToCart = (post) => {
    const cartItem = cart.find((item) => item.id === post.id);
    if (!cartItem) {
      // const newPost = {
      //   id: post.id,
      //   title: post.title,
      //   ingredients: post.ingredients,
      //   image: post.image,
      //   description: post.description,
      // };
      dispatch(addCart(post));
    } else {
      dispatch(increaseQuantity(post.id));
    }
  };

  const increaseQuantityHandler = (id) => {
    // dispatch(IncreaseQuantity(post))
    // const updatedCart = [...cart];
    // const updatedCart = cart.map((item) => {
    //   if (item.id === post.id) {
    //     return {
    //       ...item,
    //       quantity: item.quantity + 1,
    //     };
    //   }
    //   return item;
    // });
    dispatch(increaseQuantity(id))
    // setCart(newCart);
  };

  const decreaseQuantityHandler = (id) => {
    // const cartItem = cart.find((item) => item.id === post.id);
    // if (cartItem && cartItem.quantity > 0) {
    //   const updatedCart = cart.map((item) => {
    //     if (item.id === post.id) {
    //       return {
    //         ...item,
    //         quantity: item.quantity - 1,
    //       };
    //     }
    //     return item;
    //   });
      // setCart(updatedCart);
      dispatch(decreaseQuantity(id))
    }
   
 

useEffect(() => {
    dispatch(coffeeDetails())
  }, [dispatch]);


  const totalItemsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <div>
        <div className="flex justify-center justify-items-center">
          <div className="bg-orange-500  rounded-xl font-serif w-[22%] sm:w-[10%] text-center  mt-5">
            <button onClick={showCart} className="p-1">
              Products
            </button>
          </div>
          <div className=" flex justify-center ml-1 bg-orange-500 rounded-xl font-serif w-[22%] sm:w-[10%]  mt-5">
            <button onClick={showCart}>Cart</button>
            <span className="p-1">{totalItemsInCart.toString()}</span>

          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    mt-10 px-10 md:px-15
    lg:px-32"
        >
          {!isCartVisible && coffeeDataAvailable && (
            output.map((post, index) => {
              return (
                <div className="m-4" key={index}>
                  <img
                    src={post.image}
                    alt=""
                    className="w-full rounded-2xl object-cover h-[200px]"
                  />
                  <h3 className="mt-3 text-orange-500 font-serif">
                    {post.title}
                  </h3>
                  <h3 className="font-bold mt-3 font-serif">
                    {post.ingredients}
                  </h3>
                  <h3 className=" line-clamp-2 text-gray-500 mt-3 font-serif">
                    {post.description}
                  </h3>
                  <h3 className="font-serif font-bold text-orange-500 mt-3 mb-2">
                    99 Rupees/-
                  </h3>

                  <div className="flex items-center">
                    <button
                      className="bg-orange-200 w-[30px] rounded"
                      onClick={() => increaseQuantityHandler(post.id)}
                    >
                      +
                    </button>
                    <button
                      className="text-orange-500"
                      onClick={() => addToCart(post)}
                    >
                      Add to Cart
                    </button>

                    <button
                      className="bg-gray-200 w-[30px] rounded"
                      onClick={() => decreaseQuantityHandler(post.id)}
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })
          )  
          }
        </div>
        { isCartVisible &&<Cart cart={cart}  />}
      </div>
    </>
  );
};

export default Posts;
