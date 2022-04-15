import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, TicketPage } from "./pages";
import { Nav } from "./components";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ticket" element={<TicketPage />} />
          {/* <Route path="/ticket/:id" element={<TicketPage editMode={true} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

/** Attributions for images */
// Logo - <a href="https://www.flaticon.com/free-icons/promotional" title="promotional icons">Promotional icons created by bsd - Flaticon</a>
// Blank User - <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>
