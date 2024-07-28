import React, { useState } from "react";

import Avartar1 from '../assets/avatar1.jpg'
import Avartar2 from '../assets/avatar2.jpg'
import Avartar3 from '../assets/avatar3.jpg'
import Avartar4 from '../assets/avatar4.jpg'
import Avartar5 from '../assets/avatar5.jpg'
import { Link } from "react-router-dom";

const authorsData = [
    { id: 1, avatar: Avartar1, name: "Ernest Archiever", posts: 3 },
    { id: 2, avatar: Avartar2, name: "Jone Doe", posts: 5 },
    { id: 3, avatar: Avartar3, name: "Dramanal Mahama", posts: 0 },
    { id: 4, avatar: Avartar4, name: "Nama Addo", posts: 2 },
    { id: 5, avatar: Avartar5, name: "Hajia Bintu", posts: 1 },
];

const Authors = () => {
    const [authors, setAuthors] = useState(authorsData);

    return (
        <section className="authors">
            {authors.length > 0 ? <div className="container authors_container">
                {
                    authors.map(({ id, avatar, name, posts }) => {
                        return <Link key={id} to={`/posts/users/${id}`} className="author">
                            <div className="author_avatar">
                                <img src={avatar} alt={`Image of ${name}`} />
                            </div>
                            <div className="author_info">
                                <h4>{name}</h4>
                                <p>{posts}</p>
                            </div>
                        </Link>
                    })
                }
            </div> : <h2 className="center">No users/authors found</h2>}
        </section>
    )
}

export default Authors;