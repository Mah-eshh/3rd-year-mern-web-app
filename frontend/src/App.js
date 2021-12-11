import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PostDetails from "./components/PostDetails/PostDetails";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import HashLoader from "react-spinners/HashLoader";

import About from "./components/Navbar/about";
import Contact from "./components/Navbar/contact";
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <HashLoader
          size={50}
          height={30}
          width={40}
          radius={20}
          margin={20}
          color="#63BDEC"
          loading={loading}
        />
        <Navbar />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
