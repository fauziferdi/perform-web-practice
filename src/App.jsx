import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import DynamicImport from "./pages/DynamicImport";
import ImportOnVisibility from "./pages/importOnVisibility";
import ListVirtualization from "./pages/ListVirtualization";
import Blog from "./pages/Blog";
import Cache from "./pages/Cache";

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Navbar</span>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dynamic-import">
                  Dynamic Import
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/import-on-visibility">
                  Import Visibility
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list-virtualization">
                  List Virtualization
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cache">
                  Cache
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dynamic-import" element={<DynamicImport />} />
          <Route
            path="/import-on-visibility"
            element={<ImportOnVisibility />}
          />
          <Route path="/list-virtualization" element={<ListVirtualization />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/cache" element={<Cache />} />
        </Routes>
      </div>
    </Router>
  );
}
