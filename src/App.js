import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from "react";
import { getCartDataThunk, saveCartDataThunk } from "./store/cartThunks";

let isInitial = true;

function App() {
  const showCart = useSelector(state=>state.cartToggler.showCart);
  
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(()=> {
	  dispatch(getCartDataThunk());
  }, [dispatch]);

  useEffect(()=>{
	if (!cart.isDBSync && !isInitial) {
		dispatch(saveCartDataThunk({
			cartItems: cart.cartItems,
			totalQuantity: cart.totalQuantity,
		}));
	}
	isInitial = isInitial ? false: isInitial;
  }, [cart, dispatch]);

  return (
		<Layout>
			{showCart && <Cart />}
			<Products />
		</Layout>
  );
}

export default App;
