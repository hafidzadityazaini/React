import axios from "axios";
import { useEffect, useState } from "react";

function CobaAxios() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setPost(response.data);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <ul>
                {post.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default CobaAxios;