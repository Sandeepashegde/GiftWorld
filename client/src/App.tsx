import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Header from "./components/header";
import Cart from "./components/cart";
import Login from "./components/login";
import Register from "./components/register";
import About from "./components/about";
import ContactUs from "./components/contact";
import Categories from "./components/categories";
import BirthdayGifts from "./components/Categories/birthday";
import Aniversarygifts from "./components/Categories/aniversary";
import Weddinggift from "./components/Categories/wedding";
import Personalgift from "./components/Categories/personal";
import Corporategift from "./components/Categories/corporate";
import Babygift from "./components/Categories/baby";
import Gourmetgift from "./components/Categories/gourmet";
import Homegift from "./components/Categories/home";
import Ecogift from "./components/Categories/eco";
import Luxurygift from "./components/Categories/luxury";
import "./App.css"

const App = () => {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          {/* categories */}
          <Route path="/Categories/birthday" element={<BirthdayGifts />} />
          <Route path="/Categories/aniversary" element={<Aniversarygifts />} />
          <Route path="/Categories/wedding" element={<Weddinggift />} />
          <Route path="/Categories/personal" element={<Personalgift />} />
          <Route path="/Categories/corporate" element={<Corporategift />} />
          <Route path="/Categories/baby" element={<Babygift />} />
          <Route path="/Categories/gourmet" element={<Gourmetgift />} />
          <Route path="/Categories/home" element={<Homegift />} />
          <Route path="/Categories/eco" element={<Ecogift />} />
          <Route path="/Categories/luxury" element={<Luxurygift />} />
        </Routes>
    </Router>
  );
};

export default App;
