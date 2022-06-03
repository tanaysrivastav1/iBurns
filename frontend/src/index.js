import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './about';
import Create from './create';
import ButtonAppBar from './header';

ReactDOM.render(
  <Router>
    <ButtonAppBar />
    <Routes>
      <Route path="/" element={<Create />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);