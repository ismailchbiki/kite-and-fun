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
import Watersports from "./Components/Watersports/WatersportsPage";
import SingleWatersport from "./Components/Watersports/SingleWatersportPage";

function App() {
  return (
    <DarkThemeProvider>
      <Router>
        <Navbar />
        <Buttons />

        <Routes>
          <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Index />} />
          <Route path={`${process.env.PUBLIC_URL}/watersports`} element={<Watersports />} />
          <Route path={`${process.env.PUBLIC_URL}/watersports/:id`} element={<SingleWatersport />} />
          <Route path={`${process.env.PUBLIC_URL}/contact`} element={<Contact />} />
          <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
          <Route path={`${process.env.PUBLIC_URL}/destination/:id`} element={<Destination />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </DarkThemeProvider>
  );
}

export default App;
