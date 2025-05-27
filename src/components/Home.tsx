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
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const rez = await fetch('http://localhost:8000/blogs')
                const data = await rez.json();
                setBlogs(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false)
            }
        }
        setTimeout(loadData, 1000)
    }, [])


    return (
        <div className="home">
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    )
}