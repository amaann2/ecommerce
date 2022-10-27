import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact'
import Product from './Products'
import Cart from './Cart'
import SingleProduct from './SingleProduct'
import ErrorPage from './ErrorPage'
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./component/Header.js";

const App = () => {
  const theme ={
    colors:{
      bg:'#f6f8fa',
      footer_bg :"#0a1435",
      btn:"rgb(98,84,243)",
      border:"rgb(98,84,243,0.5)",
      hr:"#ffffff",
      gradient: "linear-gradient(0deg , rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:"rgba(0,0,0,0,02) 0px 1px 3px 0px , rgba(27 , 31 , 35, 0.15) 0px 0px 0px 1px",
      shadowSupport : " rgba(0,0,0,0.16) 0px 1px 4px",

    },
    media :{
      moblie:"768px",
      tab:"998px",
    },
  };
  return <>
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/singleproduct/id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
    </ThemeProvider>
    </>
  
};

export default App;
