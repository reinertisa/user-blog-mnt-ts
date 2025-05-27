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
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const rez = await fetch('http://localhost:8000/blogs')
                if (!rez.ok) {
                    setError('Could not fetch data for that resource');
                } else {
                    const data = await rez.json();
                    setBlogs(data);
                    setLoading(false);
                }
            } catch (err) {
                setLoading(false)
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unexpected error occurred');
                }
            }
        }
        setTimeout(loadData, 1000)
    }, [])


    return (
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    )
}