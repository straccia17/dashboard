import { Component } from 'solid-js';
import { Routes, Route } from "@solidjs/router"

import Books from "./pages/Books"
import Login from "./pages/Login"
import Home from "./pages/Home"

const App: Component = () => {

  return <>
    <Routes>
      <Route path="/books" component={Books} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Routes>
    </>;
};

export default App;
