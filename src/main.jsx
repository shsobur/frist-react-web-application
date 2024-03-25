import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Bookmarks from "./Pages/Bookmarks.jsx";
import MainLayout from "./MainLayout/MainLayout.jsx";
import Blog from "./Pages/Blog.jsx";
import Content from "./components/Content.jsx";
import Auhtor from "./components/Auhtor.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },
      {
        path: "/blogs/:id",
        element: <Blog></Blog>,
        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: "author",
            element: <Auhtor></Auhtor>,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ]
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
