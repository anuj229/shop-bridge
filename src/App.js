import Home from "./components/Home"
import Create from "./components/Create"
import Delete from "./components/Delete"
import Update from "./components/Update";
import Read from "./components/Read";
import { HashRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {AppProvider} from "./Context"

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create/" element={<Create />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/view/:id" element={<Read />} />
        </Routes>
      </HashRouter>
    </AppProvider>
  );
}

export default App;
