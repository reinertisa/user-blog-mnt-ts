import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router";
import Home from "./components/Home.tsx";
import BlogForm from "./components/Form.tsx";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="create" element={<BlogForm />} />
    </Route>,
));

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
