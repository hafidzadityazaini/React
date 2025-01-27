import {
    createBrowserRouter,
    RouterProvider,
    Link,
    useParams,
  } from "react-router-dom";
  import { useState, useEffect } from "react";
  import { BookDetail } from "./soalgambar12";
  import BookList from "./soalgambar12";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BookList />,
    },
    {
      path: "/:id",
      element: <BookDetail />,
    },
  ]);
  
  function TokoBuku() {
    return <RouterProvider router={router} />;
  }
  
  export default TokoBuku;