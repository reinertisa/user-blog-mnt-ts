import {useState} from 'react';
import BlogList from "./BlogList.tsx";

export type Blog = {
    title: string,
    body: string,
    author: string,
    id: number,
}

export default function Home() {

    const [blogs] = useState<Blog[]>([
        {title: 'First Blog', body: 'Hey how are you?', author: 'Isa', id: 1},
        {title: 'Second Blog', body: 'How old are you?', author: 'Sade', id: 2},
        {title: 'Third Blog', body: 'Where do you come from?', author: 'Kristi', id: 3},
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
        </div>
    )
}