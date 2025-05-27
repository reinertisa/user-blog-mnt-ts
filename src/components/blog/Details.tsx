import {useParams} from "react-router";

export default function BlogDetails() {
    const {id} = useParams();
    return (
        <div>Blog details - {id}</div>
    )
}