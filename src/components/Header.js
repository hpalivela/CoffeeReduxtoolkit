import React, { useEffect, useState } from 'react';
import coffeelogo from '../images/coffeeLogo.jpg';
import Car from "../components/Car";
import './Header.css';
import Login from './Login';
import Posts from './Posts';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [cartData,setCartData]=useState([])
  const [show, setShow] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
    localStorage.setItem("isLogged", "true");
  };

  const handleLogout = () => {
    setIsLogged(false);
    localStorage.removeItem("isLogged");
  };
  useEffect(() => {
    const storedIsLogged = localStorage.getItem("isLogged");
    if (storedIsLogged === "true") {
      setIsLogged(true);
    }
  }, []);
  const handleShow = () => {
    setShow(true);
  };
  const navigate=useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center bg-orange-300">
        <img
          src={coffeelogo}
          alt=""
          className="w-[60px] hover:cursor-pointer"
        />
        <ul className="flex  gap-4 md:gap-12">
          <li className="hover:font-bold cursor-pointer font-serif">Home</li>
          <li className="hover:font-bold cursor-pointer font-serif">About Us</li>
          <li className="hover:font-bold cursor-pointer font-serif">Contact Us</li>
        </ul>
        {isLogged ? (
          <button
            className="bg-orange-500 p-1 m-1 rounded-xl font-serif w-[100]"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-orange-500 p-1 m-1 rounded-xl font-serif w-[100]"
            onClick={handleShow}
          >
            Login
          </button>
        )}
      </div>
      <div className="bg-gray-500 flex p-3">
        <h4 className="scrollText scroll font-serif text-gray-100 ">
          Would you like decaffeinated coffee? The café offers snacks and cakes
          with freshly brewed coffee. Now You can order online also. Deliver on
          time, If not Your coffee is free.{' '}
          <span className="font-bold text-decoration-line: underline cursor-pointer" onClick={()=>navigate('/')}>
            Order Now!!!
          </span>{' '}
        </h4>
      </div>
      <Car/>
      <Login show={show} setShow={setShow} onLogin={handleLogin} />
      {isLogged ? <Posts  cartData={cartData} setCartData={setCartData}/> : null}
    </div>
  );
};

export default Header;
