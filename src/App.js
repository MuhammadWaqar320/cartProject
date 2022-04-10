import {Routes,Route} from 'react-router-dom';
import Home from './component/home';
import Cart from './component/cart';
export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}></Route>
     <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  );
}
