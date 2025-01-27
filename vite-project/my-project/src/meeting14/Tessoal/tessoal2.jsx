import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(({ data }) => setPost(data))
            .catch(console.error);
    }, [id]);

    if (!post) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-700">{post.body}</p>
        </div>
    );
}

export default PostDetail;