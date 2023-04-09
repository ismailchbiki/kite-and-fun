// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Custome Hooks
import { DarkThemeProvider } from "./CustomeHooks/useDarkTheme/useDarkTheme";

// Import Components
import Navbar from "./Components/Navbar/Index";
import Index from "./Components/Index/Index";
import Contact from "./Components/Contact/Index";
import Buttons from "./Components/Buttons/Index";
import NotFound from "./Components/NotFound/Index";

// Import App Main Sass File
import "./App.scss";
import About from "./Components/About/Index";
import Destination from "./Components/Destinations/Body/Destination-Item/Destination";
import Products from "./Components/Products/ProductsPage";
import SingleProduct from "./Components/Products/SingleProductPage";

function App() {
  return (
    <DarkThemeProvider>
      <Router>
        <Navbar />
        <Buttons />

        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path={"/products"} element={<Products />} />
          <Route path={"/products/:id"} element={<SingleProduct />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"destination/:id"} element={<Destination />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </DarkThemeProvider>
  );
}

export default App;
