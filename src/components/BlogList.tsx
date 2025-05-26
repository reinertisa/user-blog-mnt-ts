import type {Blog} from "./Home.tsx";

type BlogListProps = {
    blogs: Blog[],
    title: string,
    handleDelete: (id: number) => void,
}

export default function BlogList({blogs, title, handleDelete}: BlogListProps) {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
    )

}