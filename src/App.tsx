import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Dashboard, TicketPage } from "./pages";
import { Nav } from "./components";
import CategoriesContext from "./context";

const App = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const value = { categories, setCategories };

  return (
    <div className="app">
      <CategoriesContext.Provider value={value}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ticket" element={<TicketPage />} />
            <Route
              path="/ticket/:id"
              element={<TicketPage editMode={true} />}
            />
          </Routes>
        </BrowserRouter>
      </CategoriesContext.Provider>
    </div>
  );
};

export default App;

/** Attributions for images */
// Logo - <a href="https://www.flaticon.com/free-icons/promotional" title="promotional icons">Promotional icons created by bsd - Flaticon</a>
// Blank User - <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>
