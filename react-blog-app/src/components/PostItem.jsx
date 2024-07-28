import React from "react";
import { Link } from "react-router-dom"
import PostAuthor from "./PostAuthor";

const PostItem = ({ postID, category, title, description, authorID, thumnail }) => {
    const shortDescription = description.length > 145 ?  + '...' : description;
    const postTitle = title.length > 30 ?  + '...' : title;
    return (

        <article className="post">
            <div className="post_thumnail">
                <img src={thumnail} alt={title} />
            </div>
            <div className="post_content">
                <Link to={`/post/${postID}`}>
                    <h3>{postTitle}</h3>
                </Link>
                <p>{shortDescription}</p>
                <div className="post_footer">
                    <PostAuthor />
                    <Link to={`/posts/categories/${category}`} className="btn category">{category}</Link>
                </div>
            </div>
        </article>
    )
}

export default PostItem;