import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Counter from "./components/calculator";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Calculate!!</NavbarBrand>
        </div>

      </Navbar>
      <Counter />
    </div>
  );
}

export default App;
