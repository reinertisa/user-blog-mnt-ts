import {useEffect, useState} from 'react';
import BlogList from "./BlogList.tsx";

export type Blog = {
    title: string,
    body: string,
    author: string,
    id: number,
}

export default function Home() {
    const [blogs, setBlogs] = useState<Blog[] | null>(null)

    useEffect(() => {
        const loadData = async () => {
            try {
                const rez = await fetch('http://localhost:8000/blogs')
                const data = await rez.json();
                setBlogs(data);
            } catch (err) {
                console.log(err);
            }
        }
        void loadData();
    }, [])


    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    )
}