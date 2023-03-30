import React, { useEffect, useState } from "react"
import GlobalStyle from "./globalStyles";
import api from "./api";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Home from "./Pages/Home";
import Collections from "./Pages/Collections";
import SearchPage from "./Pages/SearchPage";
import ItemPage from "./Pages/ItemPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/collections',
    element: <Collections />
  },
  {
    path: '/search/:name',
    element: <SearchPage />
  },
  {
    path: '/movie/:id',
    element: <ItemPage />
  },
  {
    path: '/tv/:id',
    element: <ItemPage />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Search />
      <RouterProvider router={router} />
    </>
  )
}

export default App