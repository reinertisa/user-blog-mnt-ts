import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router";
import BlogForm from "./components/blog/Form.tsx";
import BlogPage from "./components/blog";
import BlogDetails from "./components/blog/Details.tsx";



const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element={<BlogPage />} />
        <Route path="home" element={<BlogPage />} />
        <Route path="create" element={<BlogForm />} />
        <Route path="blog/:id" element={<BlogDetails />} />
    </Route>,
));

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
