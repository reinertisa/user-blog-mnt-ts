import React, {useState} from 'react';

export default function BlogForm() {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [author, setAuthor] = useState<string>('sade');

    const handleTitleChange =
        (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const handleBodyChange =
        (e: React.ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value);
    const handleAuthorChange =
        (e: React.ChangeEvent<HTMLSelectElement>) => setAuthor(e.target.value);

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
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
                <button type="submit">Add Blog</button>
            </form>
        </div>
    )
}