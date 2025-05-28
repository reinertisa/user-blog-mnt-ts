import {useNavigate, useParams} from "react-router";
import useFetch from "../../hooks/useFetch.ts";
import {useState} from "react";

type Blog = {
    title: string,
    body: string,
    author: string,
    id: number,
}

export default function BlogDetails() {
    const navigate = useNavigate();
    const {id} = useParams();
    const {data: blog, error, loading} = useFetch<Blog>(`http://localhost:8000/blogs/${id}`);
    const [err, setErr] = useState<string | null>(null);

    const handleDelete = async () => {
        try {
            await fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE'
            })
            navigate('/');
        } catch (err) {
            if (err instanceof Error) {
                setErr(err.message);
            } else {
                setErr("An unexpected error occurred");
            }
        }
    }
    return (
        <div className="blog-details">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
            {err && <div>{err}</div>}
        </div>
    )
}