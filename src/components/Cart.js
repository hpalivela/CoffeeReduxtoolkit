import React from "react";
// import './Cart.css';
import { RemoveItem } from "../CartSlice";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch=useDispatch();
  const cartValue=useSelector(state=>state.reducer.cartReducer.cart)
  const removeItem = (itemId) => {
    dispatch(RemoveItem(itemId))
  };
  return (
    <>
    <div className="container-fluid sm:w-[]">
      <table className="table table-bordered mb-0" >
        <thead className="table-head text-dark" >
          <tr>
            <th>Products</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {cartValue.map((item, index) => {
            return (
              item.quantity > 0 && (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.quantity * 99}</td>
                  <td>{item.quantity * 99 + 9}</td>
                  <td>
                    <button
                      className="bg-red-500 w-[full] p-1.5"
                      onClick={() => removeItem(item.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
      </div>
      
      </>
  );
};

export default Cart;
