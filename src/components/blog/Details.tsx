import {useParams} from "react-router";
import useFetch from "../../hooks/useFetch.ts";

type Blog = {
    title: string,
    body: string,
    author: string,
    id: number,
}

export default function BlogDetails() {
    const {id} = useParams();
    const {data: blog, error, loading} = useFetch<Blog>(`http://localhost:8000/blogs/${id}`);
    return (
        <div className="blog-details">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
    )
}