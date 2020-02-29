import React from 'react';
import './posts.css';
export default function Posts({ posts }) {
    return (
        posts.map(post => {
            return (
                <div key={post.id} className="row post">
                    <div className="col-md-12">
                        <h2 className="post-header">{post.title}</h2>
                        <div className="post-body">
                            {post.body}
                        </div>
                    </div>
                </div>
            );
        })

    )
}