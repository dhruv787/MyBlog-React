import React from 'react';
import { NavLink } from 'react-router-dom';

import './posts.css';
export default function Posts(props) {
    const { posts, comments } = props;
    return (
        posts.map(post => {
            return (
                <div className="post">
                    <div key={post.id} className="row">
                        <div className="col-md-12">
                            <h2 className="post-header">
                                <NavLink to={`/posts/${post.id}/read`}>{post.title}</NavLink>
                            </h2>
                            <div className="post-body fadeOut">
                                {post.body.substr(0, 178)}
                                <NavLink to={`/posts/${post.id}/read`}>...</NavLink>

                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <footer className="text-muted">
                            {post.commentsCnt} people commented..
                        </footer>
                    </div>

                </div>

            );
        })

    )
}