import React, {useState} from 'react';
import {useNavigate} from "react-router";

export default function BlogForm() {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [author, setAuthor] = useState<string>('sade');
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleTitleChange =
        (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const handleBodyChange =
        (e: React.ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value);
    const handleAuthorChange =
        (e: React.ChangeEvent<HTMLSelectElement>) => setAuthor(e.target.value);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const blog = {title, body, author};
        try {
            setIsPending(true);
            await fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blog)
            })
            setIsPending(false);
            navigate('/');
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred");
            }
        }
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Blog title:</label>
                <input
                    id="title"
                    type="text"
                    required={true}
                    value={title}
                    onChange={handleTitleChange}
                />

                <label htmlFor="body">Blog body:</label>
                <textarea
                    id="body"
                    required={true}
                    value={body}
                    onChange={handleBodyChange}
                />

                <label htmlFor="author">Blog author:</label>
                <select id="author" onChange={handleAuthorChange} value={author}>
                    <option value="sade">Sade</option>
                    <option value="kristi">Kristi</option>
                    <option value="isa">Isa</option>
                </select>
                <button type="submit" disabled={isPending}>{isPending ? 'Adding blog...' : 'Add Blog'}</button>
            </form>
            {error && <div>{error}</div>}
        </div>
    )
}