import List from "./List.tsx";
import useFetch from "../../hooks/useFetch.ts";

export type Blog = {
    title: string,
    body: string,
    author: string,
    id: number,
}

export default function BlogPage() {
    const {data: blogs, error, loading} = useFetch<Blog[]>('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <List blogs={blogs} title="All Blogs" />}
        </div>
    )
}