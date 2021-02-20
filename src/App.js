import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
/*
+bootstrap kullan
+components klasörü oluştur
  Nav
  Home
  Contact
  About
+App icinde import et
her birini goster
react router dom ile ekranda ayrı ayrı göster
*/

export default function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Row className="text-center">
          <Col sm={{ offset: 3, span: 6 }}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/products">
                <Products />
              </Route>

              <Route path="/products/:id">
                <ProductDetail />
              </Route>

              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/404">
                <NotFound />
              </Route>
              <Route path="*">
                <Redirect to="/404" />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}
