import React, { useEffect } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import {
  cartItemList,
  removeCartItem,
  changeCartItemQuantity,
} from "../actions/cartActions";
import { BiLoader } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  let cartData = [];
  let totalCartPrice;
  const incQuantity = "Increase";
  const decQuantity = "Decrease";

  if (cartItems.cartItemsList) {
    var { cartItemsList, error, loading } = cartItems;
    cartData = cartItemsList;
    const itemPrices =
      cartData.length > 0 &&
      cartData.map((val) => {
        return val.price * val.quantity;
      });
    totalCartPrice =
      itemPrices &&
      itemPrices.reduce((acc, val) => {
        return acc + val;
      });
  }

  useEffect(() => {
    const id = Cookies.get("userId");
    dispatch(cartItemList(id));
  }, [dispatch]);

  const handleDeleteItemFromCart = async (_id) => {
    return dispatch(removeCartItem(_id));
  };

  const handleQuantityChange = (item) => {
    const { quantity, id } = item;
    return dispatch(changeCartItemQuantity({ quantity, id }));
  };

  const loadCartItems = cartData && cartData.length !== 0;

  return (
    <div className="flex justify-between">
      <div className="ml-32 w-[40%]">
        <h1 className="text-center font-bold text-3xl py-6">
          {error ? error : "My Cart"}
        </h1>
        {!loading ? (
          loadCartItems ? (
            cartData.map((value, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between pb-8 border-y-4 border-slate-100"
                >
                  <div className="py-4">
                    <p>{value.name}</p>
                    <span>Price</span> : {value.price * value.quantity}
                    <div className="flex">
                      <span>Quantity :</span>
                      <div className="flex justify-evenly ml-3">
                        <AiFillPlusCircle
                          onClick={() => {
                            handleQuantityChange({
                              quantity: incQuantity,
                              price: value.price,
                              id: value._id,
                            });
                          }}
                          className="mr-2"
                        />
                        {value.quantity}
                        <AiFillMinusCircle
                          onClick={() => {
                            handleQuantityChange({
                              quantity: decQuantity,
                              price: value.price,
                              id: value._id,
                            });
                          }}
                          className="ml-2"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-3 cursor-pointer">
                      <span>Delete</span>
                      <AiFillDelete
                        className="w-4 h-6"
                        onClick={() => {
                          handleDeleteItemFromCart(value._id);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <img
                      className="w-24 h-24 mt-4"
                      src={value.image}
                      alt="img."
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col items-center justify-center mt-24 ">
              <LuShoppingCart className="h-10 w-10" />
              <p>Your Cart is empty</p>
            </div>
          )
        ) : (
          <div className="flex justify-center mt-24">
            <BiLoader className="h-10 w-10" />
          </div>
        )}
      </div>
      {loadCartItems && (
        <div className="mr-40 py-6 ">
          <h1 className="font-bold text-3xl">
            SubTotal={totalCartPrice} /- INR
          </h1>
          <button className="bg-red-600 py-2 px-5 text-white ml-[50%] mt-4">
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
