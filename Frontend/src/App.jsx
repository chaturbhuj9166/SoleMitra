import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookNow from "./pages/BookNow";

// Services
import Attraction from "./Services/Attraction";
import Breakup from "./Services/Breakup";
import DoNothing from "./Services/DoNothing";
import Loyalty from "./Services/Loyalty";
import Patchup from "./Services/Patchup";
import Relationship from "./Services/Relationship";
import Detective from "./Services/Detective";

function App() {
  return (
    <Routes>

      {/* Layout Wrapper */}
      <Route path="/" element={<Layout />}>

        {/* Main Pages */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book-now" element={<BookNow />} />

        {/* Services */}
        <Route path="relationship-coach" element={<Relationship />} />
        <Route path="master-the-art-of-attraction" element={<Attraction />} />
        <Route path="take-a-loyalty-test" element={<Loyalty />} />
        <Route path="patchup-services" element={<Patchup />} />
        <Route path="breakup-services" element={<Breakup />} />
        <Route path="do-nothing" element={<DoNothing />} />
        <Route path="hire-a-personal-detective" element={<Detective />} />

      </Route>

    </Routes>
  );
}

export default App;