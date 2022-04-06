import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/index/Index";
import Article from "../pages/article/Article";
import Login from "../pages/login/Login";

export default function PrivateRoute() {
  return (
      
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route exact path="/" element={<Index />} />
    <Route path="/article/:id" element={<Article />}/>
  </Routes>
  );
}
