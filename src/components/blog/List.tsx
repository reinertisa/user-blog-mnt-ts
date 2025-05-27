import type {Blog} from "./index.tsx";
import {Link} from "react-router";

type BlogListProps = {
    blogs: Blog[],
    title: string,
}

export default function BlogList({blogs, title}: BlogListProps) {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}