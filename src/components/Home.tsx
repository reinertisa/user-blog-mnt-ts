import BlogList from "./BlogList.tsx";
import useFetch from "../hooks/useFetch.ts";

export type Blog = {
    title: string,
    body: string,
    author: string,
    id: number,
}

export default function Home() {
    const {data: blogs, error, loading} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    )
}